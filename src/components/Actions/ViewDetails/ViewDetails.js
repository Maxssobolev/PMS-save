import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { ReactComponent as Icon } from '../../../assets/img/icons/eye.svg'
import CancelButton from '../../ButtonControllers/CancelButton';

export default function ViewDetails(props) {
    const [modalShow, setModalShow] = useState(false);
    const closeModal = () => {
        setModalShow(false)
    }
    const customHandlerViewDetails = props?.customHandlerViewDetails
    return (
        <>
            <button type='button' title="View Details" className='action action_viewDetails' onClick={() => customHandlerViewDetails != undefined ? customHandlerViewDetails() : setModalShow(true)}>
                <Icon />
            </button>
            <MyModal show={modalShow} closeModal={closeModal} {...props} onHide={() => setModalShow(false)} className="viewDetails" />

        </>
    )
}

function MyModal(props) {


    return (
        <Modal dialogClassName='modal-fit-content'  {...props} aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Charge Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" >
                {/* Some Additional Details  */}
                <div className="btn-wrapper">
                    <CancelButton text="Back" handler={props.closeModal} />
                </div>
            </Modal.Body>
        </Modal>
    );
}


