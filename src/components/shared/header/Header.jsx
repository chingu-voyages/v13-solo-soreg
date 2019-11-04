import React, { Component } from "react";
import { Wrapper, Logo } from "./styles";

export default class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Logo>Online Personal Diary</Logo>
            </Wrapper>
        );
    }
}
