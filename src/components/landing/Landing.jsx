import React from "react";
import Signup from "./Signup";
import styled from "styled-components";

// I know this looks rushed. It's only here to make the signup form somewhat centered
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100%;
`;

const Landing = () => {
    return (
        <Wrapper>
            <Signup />
        </Wrapper>
    );
};

export default Landing;
