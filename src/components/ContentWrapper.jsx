import React from "react";
import Header from "./shared/header/Header";
import AuthHelper from "./auth/AuthHelper";

export default class ContentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthHelper();

        this.state = {
            auth: this.Auth.getCurrentUser()
        };
    }

    render() {
        const { auth } = this.state;
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { auth })
        );

        return (
            <div>
                <Header auth={auth} />
                {childrenWithProps}
            </div>
        );
    }
}
