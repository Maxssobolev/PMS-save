import React, { useState } from 'react'

import { Modal } from 'react-bootstrap'

import { ReactComponent as Icon } from '../../../assets/img/icons/email.svg'
import SendEmailForm from '../../Forms/SendEmailForm/SendEmailForm';
export default function SendEmail(props) {
    const [modalShow, setModalShow] = useState(false);
    const handler = props?.handlerEmail
    return (
        <>
            <button type='button' onClick={() => handler != undefined ? handler() : setModalShow(true)} title="Send Email" className='action action_sendEmail'>
                <Icon /> {props.sendEmailAll && <span>Email All</span>} {props.widthTextEmail && <span>Send Email</span>}
            </button>
            <SendEmailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="sendEmailModal"
            />
        </>
    )
}


//MODAL
function SendEmailModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    const nomer = 65751
    return (
        <Modal size="lg" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Email To Patient No. {nomer}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <SendEmailForm closeModal={closeModal} />
            </Modal.Body>
        </Modal>
    );
}