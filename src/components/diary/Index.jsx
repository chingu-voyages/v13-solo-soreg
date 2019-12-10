import React from "react";
import endpoints from "components/shared/endpoints";
import { Post } from "components/shared/helpers/fetch";
import { debounce } from "debounce";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

const EditorPlaceholder = styled.div``;

class Diary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: "",
            text: "",
            entries: []
        };

        this.addNewEntry = this.addNewEntry.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitEntry = debounce(this.submitEntry.bind(this), 500);
        this.onEntryPick = this.onEntryPick.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }

    componentDidMount() {
        const {
            auth: { email }
        } = this.props;

        const url = endpoints.diary.getEntries;
        const body = {
            email
        };

        Post(url, body)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => {
                const { entries } = json;
                if (entries && entries.length > 0) {
                    this.setState({
                        entries,
                        id: entries[0].id,
                        title: entries[0].title,
                        text: entries[0].text
                    });
                }
            })
            .catch(err => console.error(err));
    }

    addNewEntry() {
        const {
            auth: { email }
        } = this.props;

        const url = endpoints.diary.createEntry;
        const body = {
            email,
            entry: {
                title: "New diary entry",
                text: ""
            }
        };

        Post(url, body)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => {
                const { entries } = json;

                this.setState({
                    entries: entries,
                    id: (entries[0] && entries[0].id) || null,
                    title: (entries[0] && entries[0].title) || null,
                    text: (entries[0] && entries[0].text) || null
                });
            })
            .catch(err => console.error(err));
    }

    deleteEntry(entry) {
        const {
            auth: { email }
        } = this.props;

        const url = endpoints.diary.deleteEntry;
        const body = {
            email,
            entryId: entry.id
        };

        Post(url, body)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => {
                const { entries } = json;

                this.setState({
                    entries,
                    id: (entries[0] && entries[0].id) || null,
                    title: (entries[0] && entries[0].title) || null,
                    text: (entries[0] && entries[0].text) || null
                });
            })
            .catch(err => console.error(err));
    }

    onTitleChange(e) {
        const { value } = e.target;

        this.setState({
            title: value
        });
    }

    onInputChange(event, editor) {
        const text = editor.getData();

        this.submitEntry(text);
    }

    onEntryPick(entry) {
        this.setState({
            ...entry
        });
    }

    submitEntry(text) {
        const { id, title } = this.state;

        if (id) {
            const {
                auth: { email }
            } = this.props;
            const url = endpoints.diary.submitEntry;
            const body = {
                email,
                entry: {
                    id,
                    title,
                    text
                }
            };

            Post(url, body)
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(json => {
                    this.setState({
                        entries: json.entries
                    });
                })
                .catch(err => console.error(err));
        }
    }

    render() {
        const { title, text, id, entries } = this.state;
        const hasEntries = entries && entries.length > 0;

        return (
            <Wrapper>
                <Sidebar
                    entries={entries}
                    selectedEntryId={id}
                    onEntryPick={this.onEntryPick}
                    addNewEntry={this.addNewEntry}
                    deleteEntry={this.deleteEntry}
                />
                {hasEntries > 0 && id ? (
                    <Editor
                        title={title}
                        text={text}
                        onTitleChange={this.onTitleChange}
                        onInputChange={this.onInputChange}
                    />
                ) : hasEntries ? (
                    <EditorPlaceholder>
                        Select an entry to start writing
                    </EditorPlaceholder>
                ) : (
                    <EditorPlaceholder>
                        Create an entry to start
                    </EditorPlaceholder>
                )}
            </Wrapper>
        );
    }
}

export default Diary;
