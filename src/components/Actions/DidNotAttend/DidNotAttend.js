import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

import { ReactComponent as Icon } from '../../../assets/img/icons/add.svg'
import DidNotAttendForm from '../../Forms/DidNotAttendForm/DidNotAttendForm';
export default function DidNotAttend(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button type='button' title="Did Not Attend" className='action action_didNotAttend' onClick={() => setModalShow(true)}>
                <Icon style={{ transform: 'rotate(45deg)' }} fill="#3480C0" />
            </button>
            <DidNotAttendModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="didNotAttendModal"
            />
        </>
    )
}


//MODAL
function DidNotAttendModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Did Not Attend On Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <DidNotAttendForm closeModal={closeModal} />
            </Modal.Body>
        </Modal>
    );
}