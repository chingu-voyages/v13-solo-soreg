import React from "react";
import { Get, Post } from "../shared/helpers/fetch";
import { debounce } from "debounce";
import Navbar from "./Navbar";
import Editor from "./Editor";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

class Diary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: "",
            text: "",
            entries: null
        };

        this.addNewEntry = this.addNewEntry.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.submitEntry = debounce(this.submitEntry.bind(this), 500);
        this.onEntryPick = this.onEntryPick.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }

    componentDidMount() {
        const {
            auth: { email }
        } = this.props;

        const url = "users/getUserEntries";
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
                this.setState({
                    entries: json.entries
                });
            })
            .catch(err => console.error(err));
    }

    addNewEntry() {
        const {
            auth: { email }
        } = this.props;

        const url = "users/createEntry";
        const body = {
            email,
            entry: {
                title: "New title",
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
                this.setState({
                    entries: json.entries
                });
            })
            .catch(err => console.error(err));
    }

    deleteEntry(entry) {
        const {
            auth: { email }
        } = this.props;

        const url = "users/deleteEntry";
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
                this.setState({
                    entries: json.entries
                });
            })
            .catch(err => console.error(err));
    }

    onInputChange(e) {
        const { name, value } = e.target;
        const { title, text } = this.state;

        this.setState(
            {
                [name]: value
            },
            () => {
                if (title && text) {
                    this.submitEntry();
                }
            }
        );
    }

    onEntryPick(entry) {
        this.setState({
            ...entry
        });
    }

    submitEntry() {
        const { id, title, text } = this.state;

        if (id) {
            const {
                auth: { email }
            } = this.props;
            const url = "users/postEntry";
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
                    console.log(json);
                })
                .catch(err => console.error(err));
        }
    }

    render() {
        const { title, text, entries } = this.state;

        return (
            <Wrapper>
                <Navbar
                    entries={entries}
                    onEntryPick={this.onEntryPick}
                    addNewEntry={this.addNewEntry}
                    deleteEntry={this.deleteEntry}
                />
                <Editor
                    title={title}
                    text={text}
                    onChange={this.onInputChange}
                />
            </Wrapper>
        );
    }
}

export default Diary;
