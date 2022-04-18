import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import '../../../assets/scss/modal.scss'
import LoginForm from '../../Forms/LoginForm/LoginForm';
import ListOfCredentials from '../../ListOfCredentials/ListOfCredentials';


import ListOfCredentialsForm from '../../Forms/ListOfCredentialsForm/ListOfCredentialsForm';


function MyListOfCredentialsModal(props) {
    return (
        <Modal size="md" {...props} onHide={() => {
            props.onHide()
            props.showTableCredentials(true)

        }} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.direction == 'create' ? 'Add new' : 'Edit'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <ListOfCredentialsForm
                    thisModalHide={props.onHide}
                    prevModalShow={() => props.showTableCredentials(true)}

                    direction={props.direction}
                    {...(props.direction == 'update' ? { rowData: props?.rowData } : null)}
                />
            </Modal.Body>
        </Modal>
    );
}

function MydModalWithGrid(props) {
    return (
        <Modal dialogClassName="loginFormModal" {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <LoginForm loginSuccess={props.loginSuccess} />
            </Modal.Body>
        </Modal>
    );
}


function MyCredentialModal(props) {

    return (
        <Modal dialogClassName="modal-80w" {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <ListOfCredentials {...props} />
            </Modal.Body>
        </Modal>
    );
}


export default function Credentials(props) {
    const [modalShow, setModalShow] = useState(false);
    const [modalLoginAndPasswordsShow, setModalLoginAndPasswordsShow] = useState(false)
    const [modalWithFormShow, setModalWithFormShow] = useState({ allow: false })

    const title = "Quick Links Credentials"

    const loginSuccess = () => {
        window.sessionStorage.setItem('listOfCredentialsAccess', true);
        setModalShow(false)
        setModalLoginAndPasswordsShow(true)
    }

    const showTableCredentials = bool => {
        setModalLoginAndPasswordsShow(bool)

    }

    const handlerEditDetails = (rowData = {}) => {
        setModalWithFormShow({ allow: true, direction: 'update', rowData: rowData })
        setModalLoginAndPasswordsShow(false)

    }

    const handlerCreateNewRow = () => {
        setModalWithFormShow({ allow: true, direction: 'create' })
        setModalLoginAndPasswordsShow(false)

    }

    return (
        <>
            <button href="/" className="topMenu-nav__item link" onClick={() => window.sessionStorage.getItem('listOfCredentialsAccess') ? setModalLoginAndPasswordsShow(true) : setModalShow(true)}>{props.btnText}</button>

            {window.sessionStorage.getItem('listOfCredentialsAccess') ?
                <>
                    {/*TABLE*/}<MyCredentialModal handlerCreateNewRow={handlerCreateNewRow} handlerEditDetails={handlerEditDetails} title={title} show={modalLoginAndPasswordsShow} onHide={() => setModalLoginAndPasswordsShow(false)} className="credentialsList" />
                    {/*FORM ADD OR EDIT */}<MyListOfCredentialsModal showTableCredentials={showTableCredentials} show={modalWithFormShow.allow} rowData={modalWithFormShow.rowData} direction={modalWithFormShow.direction} /*closeModal={closeModal}*/ {...props} onHide={() => setModalWithFormShow({ allow: false })} className="myListOfCredentialModal" />

                </>
                :
                <MydModalWithGrid loginSuccess={loginSuccess} title={title} show={modalShow} onHide={() => setModalShow(false)} className="credentials" />
            }

        </>
    );
}

