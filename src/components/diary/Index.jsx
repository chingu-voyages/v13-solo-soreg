import React from "react";
import Navbar from "./Navbar";
import Editor from "./Editor";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
`;

class Diary extends React.Component {
    render() {
        return (
            <Wrapper>
                <Navbar />
                <Editor />
            </Wrapper>
        );
    }
}

export default Diary;
