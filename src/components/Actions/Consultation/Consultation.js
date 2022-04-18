import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ReactComponent as Icon } from '../../../assets/img/icons/add.svg'
import ConsultationForm from '../../Forms/ConsultationForm/ConsultationForm';

export default function Consultation(props) {
    const [modalShow, setModalShow] = useState(false);
    const handlerConsultationArgs = props?.handlerConsultationArgs

    return (
        <>
            {props.custom == undefined &&
                <button type='button' title="Consultation" onClick={() => setModalShow(true)} className='action action_consultation'>
                    <Icon fill="rgba(23, 68, 119, 1)" />
                </button>
            }
            <ConsultationModal
                direction={props.direction}
                rowdata={handlerConsultationArgs || props.rowdata}
                show={props.custom ? props.show : modalShow}
                onHide={() => props.custom ? props.close() : setModalShow(false)}
                className="consultationModal"
            />
        </>
    )
}


//MODAL
function ConsultationModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    const data = '07-09-2021 11:00'
    return (
        <Modal dialogClassName="modal-850w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Consultation On  {data}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <ConsultationForm closeModal={closeModal} rowdata={rowData} direction={props.direction} />
            </Modal.Body>
        </Modal>
    );
}