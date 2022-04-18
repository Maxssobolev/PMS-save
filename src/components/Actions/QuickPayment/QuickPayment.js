import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { ReactComponent as Icon } from '../../../assets/img/icons/euro.svg'
import CommonButton from '../../ButtonControllers/CommonButton';
export default function QuickPayment(props) {
    const [modalShow, setModalShow] = useState(false);
    const closeModal = () => {
        setModalShow(false)
    }
    return (
        <>
            <button type='button' title="Quick Payment" className='action action_quickPayment' onClick={() => setModalShow(true)}>
                <Icon fill="#3480C0" width={12} height={16} />
            </button>
            <MyModal show={modalShow} closeModal={closeModal} {...props} onHide={() => setModalShow(false)} className="quickPayment" />

        </>
    )
}

function MyModal(props) {


    return (
        <Modal dialogClassName='modal-fit-content'  {...props} aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Do You Want To Print The Invoice?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" >

                <div className="btn-wrapper">
                    <CommonButton text="Print For Patient" handler={() => { }} />
                    <CommonButton text="Email For Patient" handler={() => { }} />
                </div>

            </Modal.Body>
        </Modal>
    );
}


