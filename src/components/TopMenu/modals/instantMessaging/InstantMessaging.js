import React, { useState } from 'react'
import { Modal, Tab, Row, Col, Nav } from 'react-bootstrap';
import '../../../../assets/scss/modal.scss'
import Messages from './Messages/Messages';
import NewMessage from './NewMessage/NewMessage';
import newMessageStyles from './NewMessage/NewMessage.module.scss'

function InstantMessagingModalNewMessage(props) {
    return (
        <Modal dialogClassName="modal-80w" {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className={newMessageStyles.modalTitle}>
                <Modal.Title id="contained-modal-title-vcenter" >
                    <div className="title">
                        {props.title}
                    </div>
                    <div className={newMessageStyles.newMessageButton}>
                        New Message
                    </div>
                </Modal.Title>

            </Modal.Header>
            <Modal.Body>

                <NewMessage cancel={props.cancel} />

            </Modal.Body>
        </Modal >
    )
}


function InstantMessagingModal(props) {
    const [modalNewMessageShow, setModalNewMessageShow] = useState(false);
    const cancel = () => {
        setModalNewMessageShow(false)
    }
    return (
        <>
            <Modal dialogClassName="modal-80w" {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tab.Container defaultActiveKey="ReceivedMessages">
                        <Row>
                            <Col>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ReceivedMessages">
                                            <button className="tabNavigators">Received Messages</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="SentMessages">
                                            <button className="tabNavigators">Sent Messages</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <button className="tabNavigators tabNavigators_black" onClick={() => setModalNewMessageShow(true)}>New Message</button>

                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="ReceivedMessages">
                                        <Messages serverParametrs={{
                                            GET: '/api/received'
                                        }} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="SentMessages">
                                        <Messages serverParametrs={{
                                            GET: '/api/sent'
                                        }} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
            </Modal >


            <InstantMessagingModalNewMessage
                cancel={cancel}
                show={modalNewMessageShow}
                onHide={() => setModalNewMessageShow(false)}
                className="instantMessagingNewMessage"
                title={props.title}
            />
        </>
    );

}


export default function InstantMessaging() {
    const [modalShow, setModalShow] = useState(false);
    const title = "Instant Messaging"

    const tableHeaders = [
        {
            title: "User", //Название поля, заголовок
            field: 'user', //КЛЮЧ связанного с заголовком поля в массиве со строками
        },
        {
            title: "Patient",
            field: 'patient',
        },
        {
            title: "Person Contact",
            field: 'personContact',
            width: 125
        },
        {
            title: "Company Contact",
            field: 'companyContact',
            width: 150
        },
        {
            title: "Subject",
            field: 'subject',
        },
        {
            title: "Phone",
            field: 'phone',

        },
        {
            title: "Date",
            field: 'date',
        },
        {
            title: "Time",
            field: 'time',
        },
        {
            title: "Sent Date",
            field: 'sentDate',
        },
        {
            title: "Actions",
            field: 'actions',
        },

    ]
    return (
        <>
            <button href="/" className="topMenu-nav__item link" onClick={() => setModalShow(true)}>{title}</button>
            <InstantMessagingModal
                title={title}
                data={{
                    tableHeaders,
                    //rowData
                }}
                show={modalShow}
                onHide={() => setModalShow(false)}
                className="instantMessaging"
            />
        </>
    );
}

