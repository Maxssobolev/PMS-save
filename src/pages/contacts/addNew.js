import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

import PersonContactForm from '../../components/Forms/PersonContactForm/PersonContactForm';
import CompanyContactForm from '../../components/Forms/CompanyContactForm/CompanyContactForm';
import { connect, useSelector } from 'react-redux'

function AddNewContacts() {
    const { myState } = useLocation()
    const [activeTab, setActiveTab] = useState(myState?.type ? myState?.type : "person")
    const menu = useSelector(state => state.menu)
    return (
        <div className="addNew">
            <section className="header-section">
                <h1 className="page-header">Add New Contacts</h1>
            </section>

            <section>
                <div className="widget-block">
                    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                        <Row>
                            <Col>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link eventKey="person">
                                            <button className="tabNavigators" >Persons Contacts</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="company">
                                            <button className="tabNavigators">Companies Contacts</button>
                                        </Nav.Link>
                                    </Nav.Item>


                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="person">
                                        <PersonContactForm menu={menu} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="company">
                                        <CompanyContactForm menu={menu} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </div>
    );
}
const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps)(AddNewContacts)
