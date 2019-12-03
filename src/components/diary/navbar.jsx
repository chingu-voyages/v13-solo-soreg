import React from "react";
import { connect } from "react-redux";
import { renderModal, clearModal } from "store/actions";
import DeleteModal from "./DeleteModal";
import styled from "styled-components";

const NavbarWrapper = styled.div`
    width: 300px;
    height: 100%;
    background: #67696d;
`;

const NavbarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background: #c4c4c4;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

const CreateButton = styled.div`
    padding: 15px 10px;
    background: #d0d0d0;
    border-top: 1px solid #67696d;
    cursor: pointer;
    transition: all ease 0.1s;

    &:hover {
        background: #f3f3f3;
    }

    &:last-of-type {
        border-bottom: 1px solid #67696d;
    }
`;

const Entry = styled.div`
    display: flex;
    align-items: center;
    background: #d0d0d0;
    border-top: 1px solid #67696d;
    cursor: pointer;

    &:last-of-type {
        border-bottom: 1px solid #67696d;
    }
`;

const EntryTitle = styled.div`
    flex: 3;
    padding: 15px 10px;
    transition: all ease 0.1s;

    &:hover {
        background: #c3c3c3;
    }
`;

const EntryDelete = styled.div`
    flex: 1;
    padding: 15px 10px;
    height: 100%;
    border-left: 1px solid #67696d;
    transition: all ease 0.1s;

    &:hover {
        background: #e9b19e;
    }
`;

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.onDeleteEntry = this.onDeleteEntry.bind(this);
        this.onDeleteAccept = this.onDeleteAccept.bind(this);
    }

    onDeleteEntry(entry) {
        const { renderModal } = this.props;
        renderModal({
            ModalComponent: () => (
                <DeleteModal onDelete={() => this.onDeleteAccept(entry)} />
            )
        });
    }

    onDeleteAccept(entry) {
        const { clearModal, deleteEntry } = this.props;
        clearModal();
        console.log(this.props);
        deleteEntry(entry);
    }

    render() {
        const { entries, onEntryPick, addNewEntry } = this.props;

        return (
            <NavbarWrapper>
                <NavbarTitle>Your entries</NavbarTitle>
                <CreateButton onClick={addNewEntry}>
                    Create new entry
                </CreateButton>
                {entries &&
                    entries.map(entry => (
                        <Entry key={entry.id}>
                            <EntryTitle onClick={() => onEntryPick(entry)}>
                                {entry.title}
                            </EntryTitle>
                            <EntryDelete
                                onClick={() => this.onDeleteEntry(entry)}
                            >
                                Delete
                            </EntryDelete>
                        </Entry>
                    ))}
            </NavbarWrapper>
        );
    }
}

const mapDispatchToProps = {
    renderModal,
    clearModal
};

export default connect(null, mapDispatchToProps)(Navbar);
