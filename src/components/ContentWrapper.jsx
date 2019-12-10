import React from "react";
import Diary from "./diary/Index";
import Header from "./shared/header/Header";
import Modal from "./shared/Modal";
import styled from "styled-components";

const Wrapper = styled.div`
    justify-content: center;
    height: calc(100vh - 60px);
    width: 100%;
`;

export default class ContentWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, auth } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { auth })
        );

        return (
            <div>
                <Header auth={auth} />
                <Wrapper>
                    <Modal />
                    {childrenWithProps}
                </Wrapper>
            </div>
        );
    }
}
