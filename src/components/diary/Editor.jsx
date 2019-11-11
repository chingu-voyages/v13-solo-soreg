import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    background: #9c9c9c;
`;

const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    background: #f7f7f7;
    padding: 20px;
`;

const TitleInput = styled.input`
    width: 500px;
    height: 30px;
`;

const TextArea = styled.textarea`
    margin-top: 30px;
    width: 800px;
    flex: 1;
    resize: none;
`;

const DiaryEditor = ({ title, text, onChange } = props) => {
    return (
        <Wrapper>
            <EditorWrapper>
                <TitleInput
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={onChange}
                />
                <TextArea
                    name="text"
                    placeholder="Entry"
                    value={text}
                    onChange={onChange}
                />
            </EditorWrapper>
        </Wrapper>
    );
};

export default DiaryEditor;
