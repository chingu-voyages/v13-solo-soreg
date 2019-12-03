import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    padding: 20px 0 10px;
`;

const Text = styled.p`
    font-size: 18px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    padding: 7px 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    background: ${props => props.theme.primary.brown};
    color: ${props => props.theme.header.fg};
    margin-top: 10px;
`;

const DeleteModal = ({ onDelete } = props) => {
    return (
        <Wrapper>
            <Text>Are you sure you want to delete this entry?</Text>
            <Text>Deleted entries cannot be restored.</Text>
            <Button onClick={onDelete}>Delete</Button>
        </Wrapper>
    );
};

export default DeleteModal;
