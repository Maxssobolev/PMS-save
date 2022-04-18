import React, { useState, forwardRef } from 'react'
import { Modal } from 'react-bootstrap'
import '../../../assets/scss/modal.scss'
import { ReactComponent as Icon } from '../../../assets/img/icons/add.svg'
import AppointmentForm from '../../Forms/AppointmentForm/AppointmentForm';



export default function BookNewAppointment(props) {
    const [modalShow, setModalShow] = useState(false);
    function cancel() {
        return setModalShow(false)
    }

    return (
        <>
            {props.custom == undefined &&
                <button type='button' title="Book New Appointment" className='action' onClick={() => setModalShow(true)}>
                    <Icon />
                </button>
            }
            <MyModal show={props.custom ? props.show : modalShow} cancel={props.custom ? props.close : cancel} {...props} onHide={() => props.custom ? props.close() : setModalShow(false)} className="bookNewAppointment" />
        </>
    )
}




function MyModal(props) {
    const cancel = props.cancel
    const onHide = props.onHide

    return (
        <Modal size="lg" show={props.show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <AppointmentForm cancel={cancel} direction="create" />
            </Modal.Body>
        </Modal>
    );
}


