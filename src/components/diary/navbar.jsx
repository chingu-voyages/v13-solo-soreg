import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
    width: 300px;
    height: 100%;
    background: #3c3838;
`;

const NavbarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background: #7b7b7b;
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarTitle>Your entries</NavbarTitle>
        </NavbarWrapper>
    );
};

export default Navbar;
