import React from "react";
import styled from "styled-components";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import "./editorstyles.scss";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 60px 180px 0;
    background: #e4e4e4;
`;

const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    background: #fff;
    padding: 80px 100px 0;
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 40px;
    height: 45px;
    text-align: center;
    border: none;
    outline: 0;
`;

const TextArea = styled.textarea`
    margin-top: 30px;
    width: 800px;
    flex: 1;
    resize: none;
`;

const DiaryEditor = ({ title, text, onInputChange, onTitleChange } = props) => {
    const data = text || "<p>Write your diary entry here!</p>";
    return (
        <Wrapper>
            <EditorWrapper>
                <TitleInput value={title} onChange={onTitleChange} />
                <CKEditor
                    editor={InlineEditor}
                    data={data}
                    onChange={(event, editor) => onInputChange(event, editor)}
                />
            </EditorWrapper>
        </Wrapper>
    );
};

export default DiaryEditor;
