import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import EditDetails from '../../components/Actions/EditDetails/EditDetails';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import Appointments from '../../components/Profile/Appointments';
import Consultations from '../../components/Profile/Consultations';
import AlertLog from '../../components/Profile/AlertLog';
import AdminNotes from '../../components/Profile/AdminNotes';
import Billing from '../../components/Profile/Billing';
import RPMPlans from '../../components/Profile/RPMPlans';

export default function ProfileAccounts() {

    const { state } = useLocation() // state = {id:''}
    //this will load 
    const [patientData, setPatientData] = useState({
        group: 'NHS patients',
        title: 'Mr',
        sex: 'Male',
        dob: '1981/05/02', //must be in ISO format yyyy/mm/dd
        firstName: 'Fabio',
        middleName: '',
        lastName: 'De Sousa',
        knownAs: '',

        /*ADDRESS*/
        addresLine1: '',
        addresLine2: '',
        city: 'London',
        postcode: '',

        /*CONTACT INFO*/
        homeTel: '',
        workTel: '',
        mobileTel: '07867823057',
        otherTel: '',
        email: 'mark.brierley@fujitsi.com',
        emailCC: '',
        isSubscribe: '', //checkbox
        introduction: 'GIFFARD DRIVE SURGERY',  //select
        occupation: '', //select
        bodyPart: '', //select
        dischargeOutcome: '', //select

        /*NHS*/
        nhsNumber: '',
        nhsCCG: '', //select
        triageDate: '', //datepicker
        referralDate: '', //datepicker
        priorityType: '', //select
        startBackTool: '', //select

        /*Doctor/Surgery/Consultant*/
        doctorName: '', //select
        doctorSurgery: '', //select
        consultant: '',  //select

        /*Insurance [PHI/ML]*/
        insuranceMembershipNumber: '',
        insuranceCompany: 'NHS North East Hampshire & Farnham CCG', //select
        insuranceClaimNumber: '',//datepicker
        referralDate2: '',

        /*Treatment Episode*/
        episodeName: '',
        authorisedTreatmentSessions: '', //select

        /*NOTE*/
        diaryNote: '',
        accountsNote: '',
        criticalNote: '',
        dischargeNote: ''

    })
    /*
    useEffect(()=>{
        //db query
        //setPatientData
    })
    */

    const patient_fio = `${patientData.title} ${patientData.firstName} ${patientData.lastName}`
    return (
        <div className="profile">
            <section className="header-section">
                <h1 className="page-header">{patient_fio}</h1>
                <EditDetails
                    location="profile"
                    local="firstTab"
                    id={state?.id}
                    patientData={patientData}
                />
            </section>
            <section>
                <Tab.Container defaultActiveKey="Profile">
                    <Row>
                        <Col>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link eventKey="Profile">
                                        <button className="tabNavigators" >Profile</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Appointments">
                                        <button className="tabNavigators">Appointments</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Consultations">
                                        <button className="tabNavigators">Consultations</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="AlertLog">
                                        <button className="tabNavigators">Alert Log</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="AdminNotes">
                                        <button className="tabNavigators">Admin Notes</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Billing">
                                        <button className="tabNavigators">Billing</button>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="RMPPlans">
                                        <button className="tabNavigators">RMP Plans</button>
                                    </Nav.Link>
                                </Nav.Item>

                                <button className="tabNavigators profile-actions">Actions</button>



                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="Profile">
                                    <Profile patientData={patientData} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Appointments">
                                    <Appointments />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Consultations">
                                    <Consultations patientData={patientData} patient_fio={patient_fio} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AlertLog">
                                    <AlertLog />
                                </Tab.Pane>
                                <Tab.Pane eventKey="AdminNotes">
                                    <AdminNotes />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Billing">
                                    <Billing />
                                </Tab.Pane>
                                <Tab.Pane eventKey="RMPPlans">
                                    <RPMPlans />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </section>
        </div>
    );
}

