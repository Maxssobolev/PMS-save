import React, { useState } from 'react';
import CommonButton from '../ButtonControllers/CommonButton';
import { Modal } from 'react-bootstrap';
import AdminNoteForm from '../Forms/AdminNoteForm/AdminNoteForm';
export default function AdminNotes(props) {
    const [notes, setNotes] = useState([])
    const [modalShow, setModalShow] = useState(false);



    return (
        <>
            <div className="adminNotesTab">
                <div className="mainArea">
                    <CommonButton text="Add New Note" customClass="button_accent" handler={() => { setModalShow(true) }} />
                </div>
            </div>

            <AdminNoteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="adminNoteModal"
            />

        </>
    )

}



//MODAL
function AdminNoteModal(props) {
    const closeModal = props.onHide
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Admin Note
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <AdminNoteForm closeModal={closeModal} />
            </Modal.Body>
        </Modal>
    );
}
