import React, { useState } from 'react'
import { ReactComponent as Icon } from '../../../assets/img/icons/chat-bubbles.svg'
import SendSMSForm from '../../Forms/SendSMSForm/SendSMSForm';
import { Modal } from 'react-bootstrap';
export default function SendSMS(props) {
    const [modalShow, setModalShow] = useState(false);
    const handler = props?.handlerSMS
    const handlerSMSArgs = props?.handlerSMSArgs
    return (
        <>
            <button type='button' onClick={() => handler != undefined ? handler() : setModalShow(true)} title="Send SMS" className='action action_sendSMS'>
                <Icon /> {props.widthTextSMS && <span>Send SMS</span>}
            </button>
            <SendSMSModal
                rowdata={handlerSMSArgs}
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="sendSMSModal"
            />
        </>
    )
}


//MODAL
function SendSMSModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata

    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Send SMS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <SendSMSForm closeModal={closeModal} rowdata={rowData} />
            </Modal.Body>
        </Modal>
    );
}