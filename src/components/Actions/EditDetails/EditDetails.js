import React, { useState } from 'react'

import PatientForm from '../../Forms/PatientForm/PatientForm'
import '../../../assets/scss/modal.scss'
import '../../../assets/scss/actions.scss'
import { ReactComponent as Icon } from '../../../assets/img/icons/edit.svg'
import { Modal } from 'react-bootstrap'
import PersonContactForm from '../../Forms/PersonContactForm/PersonContactForm'
import CompanyContactForm from '../../Forms/CompanyContactForm/CompanyContactForm'

export default function EditDetails(props) {
    const menu = props.menu
    const [modalShow, setModalShow] = useState(false);
    const closeModal = () => {
        setModalShow(false)
    }
    const customHandler = props?.customHandlerEditDetails
    const args = props?.customHandlerEditDetailsArgs || []
    return (
        <>
            <button type='button' title="Edit Details" className='action' onClick={() => customHandler !== undefined ? customHandler(...args) : setModalShow(true)}>
                <Icon />
            </button>

            <MyModal menu={menu} show={modalShow} closeModal={closeModal} {...props} onHide={() => setModalShow(false)} className="editDetails" />

        </>
    )
}

function MyModal(props) {
    const menu = props.menu
    return (
        <Modal dialogClassName={props.location.includes('contacts') ? 'modal-fit-content' : 'modal-80w'}   {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {(props.location.includes('patients') || props.location.includes('profile')) && 'Patient Info'}
                    {props.location.includes('contacts') && (
                        props.local == 'person' ? 'Edit a person contact' : 'Edit a company contact')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" {...(props.location.includes('contacts') && { style: { maxWidth: '816px' } })}>

                {(props.location.includes('patients') || props.location.includes('profile')) && (
                    <div className="addNew">
                        <PatientForm
                            menu={menu}
                            id={props.id}
                            direction='update'
                            closeModal={props.closeModal}
                            {
                            ...(
                                props.location.includes('profile') ?
                                    { initialValues: props.patientData }
                                    :
                                    null
                            )
                            }
                        />
                    </div>
                )}

                {props.location.includes('contacts') && (
                    props.local == 'person' ?
                        <PersonContactForm
                            menu={menu}
                            id={props.id}
                            direction='update'
                            closeModal={props.closeModal}
                        />
                        :
                        <CompanyContactForm
                            menu={menu}
                            id={props.id}
                            direction='update'
                            closeModal={props.closeModal}
                        />
                )}
            </Modal.Body>
        </Modal>
    );
}


