import React, { useState } from 'react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import '../../../assets/scss/modal.scss'
import { ReactComponent as Euro } from '../../../assets/img/icons/euro.svg'
function MydModalWithGrid(props) {
    return (
        <Modal size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row className="header-row">
                        <Col sm={6} >
                            Description
                        </Col>
                        <Col xs={4} >
                            Type
                        </Col>
                        <Col xs={2} >
                            Unit cost, <Euro style={{ marginBottom: '5px' }} />
                        </Col>
                    </Row>

                    {props.data.map((item, index) => {
                        return (
                            <Row className="content-row" key={`${index}_priceListRows`}>
                                <Col sm={6} >
                                    {item.desc}
                                </Col>
                                <Col xs={4} >
                                    {item.type}
                                </Col>
                                <Col xs={2} >
                                    {item.cost}
                                </Col>
                            </Row>
                        )
                    })}


                </Container>
            </Modal.Body>
        </Modal>
    );
}


export default function PriceList() {
    const [modalShow, setModalShow] = useState(false);
    const title = "Price list"
    //TO LOAD
    const data = [
        {
            desc: '20 Min Session ',
            type: 'Treatment',
            cost: '35.00'
        },
        {
            desc: '20 Min Session ',
            type: 'Treatment',
            cost: '35.00'
        },
        {
            desc: '20 Min Session ',
            type: 'Treatment',
            cost: '35.00'
        }
    ]

    return (
        <>
            <button href="/" className="topMenu-nav__item link" onClick={() => setModalShow(true)}>{title}</button>
            <MydModalWithGrid data={data} title={title} show={modalShow} onHide={() => setModalShow(false)} className="priceList" />
        </>
    );
}

