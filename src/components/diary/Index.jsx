import React from "react";
import Navbar from "./Navbar";
import Editor from "./Editor";
import styled from "styled-components";
import { debounce } from "debounce";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

class Diary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.submitEntry = debounce(this.submitEntry.bind(this), 500);
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

    submitEntry() {
        console.log("submit");
    }

    render() {
        const { title, text } = this.state;

        return (
            <Wrapper>
                <Navbar />
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
