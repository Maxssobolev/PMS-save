import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';


import { ReactComponent as Icon } from '../../../assets/img/icons/clock.svg'
import ChangeAppointmentStateForm from '../../Forms/ChangeAppointmentStateForm/ChangeAppointmentStateForm';
export default function ChangeTheState(props) {
    const [modalShow, setModalShow] = useState({ allow: false });
    return (
        <>
            <button type='button' title="Change The State" onClick={() => setModalShow({ allow: true })} className='action action_changeTheState' >
                <Icon fill="rgba(23, 68, 119, 1)" width={16} height={16} />
            </button>

            <ChangeAppointmentStateModal
                show={modalShow.allow}
                //rowdata={modalShow.rowdata}
                onHide={() => setModalShow({ allow: false })}
                className="changeAppointmentStateModal"
            />
        </>
    )
}


//MODAL
function ChangeAppointmentStateModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    return (
        <Modal dialogClassName="modal-637w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change An Appointment’s State
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <ChangeAppointmentStateForm
                    closeModal={closeModal}
                />
            </Modal.Body>
        </Modal>
    );
}
