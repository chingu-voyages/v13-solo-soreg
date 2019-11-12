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

const CreateButton = styled.div`
    padding: 15px 10px;
    background: #d0d0d0;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
        background: #f3f3f3;
    }

    &:last-of-type {
        border-bottom: 1px solid #fff;
    }
`;

const Entry = styled.div`
    padding: 15px 10px;
    background: #a2a2a2;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
        background: #c3c3c3;
    }

    &:last-of-type {
        border-bottom: 1px solid #fff;
    }
`;

const Navbar = ({ entries, onEntryPick, addNewEntry } = props) => {
    return (
        <NavbarWrapper>
            <NavbarTitle>Your entries</NavbarTitle>
            <CreateButton onClick={addNewEntry}>Create new entry</CreateButton>
            {entries &&
                entries.map(entry => (
                    <Entry key={entry.id} onClick={() => onEntryPick(entry)}>
                        {entry.title}
                    </Entry>
                ))}
        </NavbarWrapper>
    );
};

export default Navbar;
