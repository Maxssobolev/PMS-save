import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import CommonButton from '../ButtonControllers/CommonButton';
import { Modal } from 'react-bootstrap';
import TreatmentEpisodeForm from '../Forms/TreatmentEpisodeForm/TreatmentEpisodeForm';
import Actions from '../Actions';
//Profile tab
export default function Profile(props) {
    const { patientData } = props

    const [modalShow, setModalShow] = useState({ allow: false });

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='profileTab'
            editDetails customHandlerEditDetails={() => setModalShow({ allow: true, direction: 'update', rowData: cellData })}
        //wich actions needs to be included:
        //?
        />;
    }
    const [initialRowData, setInitialRowData] = useState([{
        id: '1',
        no: '88888',
        episodeName: 'Treatment',
        authorisedTreatmentSessions: 2,
        completed: 'Yes',
        dateAdded: '01-05-2018 17:06',
        lastModified: '31-08-2019 20:37',
        actions: ''

    }])
    const columns = [
        { title: 'No', field: 'no', widthGrow: 1 },
        { title: 'Episode Name', field: 'episodeName', widthGrow: 2 },
        { title: 'Authorised Treatment Sessions', field: 'authorisedTreatmentSessions', widthGrow: 2 },
        { title: 'Completed', field: 'completed', widthGrow: 1 },
        { title: 'Date Added', field: 'dateAdded', widthGrow: 1 },
        { title: 'Last Modified', field: 'lastModified', widthGrow: 1 },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <>
            <div className="profileTab">
                <div className="mainArea">
                    <div className="leftSideArea">
                        <div className="widget-block">
                            <div className="block-header">
                                Info
                            </div>
                            <Row>
                                <Col>First name: {patientData.firstName}</Col>
                                <Col>Middle name: {patientData.middleName}</Col>
                                <Col>Last name: {patientData.lastName}</Col>
                            </Row>
                            <Row>
                                <Col>Title: {patientData.title}</Col>
                                <Col>Sex: {patientData.sex}</Col>
                                <Col>DOB: {patientData.dob}</Col>
                            </Row>
                            <Row>
                                <Col>Known As: {patientData.knownAs}</Col>
                                <Col>Group: {patientData.group}</Col>
                                <Col></Col>
                            </Row>
                        </div>

                        <div className="widget-block">
                            <div className="block-header">
                                Address
                            </div>
                            <Row><Col>Address line 1:  {patientData.addressLine1}</Col></Row>
                            <Row><Col>Town/City: {patientData.city}</Col></Row>
                            <Row><Col>Address line 2:  {patientData.addressLine2}</Col></Row>
                            <Row><Col>Postcode: {patientData.postcode}</Col></Row>

                        </div>
                        <div className="widget-block">
                            <div className="block-header">
                                Contact Info
                            </div>
                            <Row>
                                <Col>Email: {patientData.email}</Col>
                                <Col>Mobile Tel: {patientData.mobileTel}</Col>
                            </Row>
                            <Row>
                                <Col>Home Tel: {patientData.homeTel}</Col>
                                <Col>Body Part: {patientData.bodyPart}</Col>
                            </Row>
                            <Row>
                                <Col>Email CC: {patientData.emailCC}</Col>
                                <Col>Other Contact Tel: {patientData.otherTel}</Col>
                            </Row>
                            <Row>
                                <Col>Work Tel: {patientData.workTel}</Col>
                                <Col>Discharge Outcome: {patientData.dischargeOutcome}</Col>
                            </Row>
                            <Row>
                                <Col>Occupation: {patientData.occupation}</Col>
                                <Col>Introduction: {patientData.introduction}</Col>
                            </Row>
                        </div>
                    </div>
                    <div className="rightSideArea">
                        <div className="widget-block">
                            <div className="block-header">
                                Notes
                            </div>
                            <Row><Col>Diary note:   {patientData.diaryNote}</Col></Row>
                            <Row><Col>Accounts note: {patientData.accountsNote}</Col></Row>
                            <Row><Col>Critical note:   {patientData.criticalNote}</Col></Row>
                            <Row><Col>Discharge note:  {patientData.dischargeNote}</Col></Row>

                        </div>
                        <div className="widget-block">
                            <div className="block-header">
                                NHS
                            </div>
                            <Row>
                                <Col>NHS CCG: {patientData.nhsCCG}</Col>
                                <Col>NHS number: {patientData.nhsNumber}</Col>
                            </Row>
                            <Row>
                                <Col>Priority Type: {patientData.priorityType}</Col>
                                <Col>Start Back Tool: {patientData.startBackTool}</Col>
                            </Row>
                            <Row>
                                <Col>Doctor name: {patientData.doctorName}</Col>
                                <Col>Referral date: {patientData.referralDate}</Col>
                            </Row>
                            <Row>
                                <Col>Doctor surgery: {patientData.doctorSurgery}</Col>
                                <Col>Triage date: {patientData.triageDate}</Col>
                            </Row>
                            <Row>
                                <Col>Consultant: {patientData.consultant}</Col>
                                <Col></Col>
                            </Row>
                        </div>

                        <div className="widget-block">
                            <div className="block-header">
                                Insurance [PHI/ML]
                            </div>
                            <Row>
                                <Col>Insurance Company: {patientData.insuranceCompany}</Col>
                            </Row>
                            <Row>
                                <Col>Insurance Membership Number: {patientData.insuranceMembershipNumber}</Col>
                            </Row>
                            <Row>
                                <Col>Insurance Claim Number: {patientData.insuranceClaimNumber}</Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="widget-block">
                        <TableWidthSearchAndPagination
                            initialRowData={initialRowData}
                            columns={columns}
                            customSearchWrapperClass="_search"
                            searchField="episodeName"
                        />
                        <div className="btn-wrapper">
                            <CommonButton text="Add New Episode" customClass="addNewEpisodeBtn" handler={() => { setModalShow({ allow: true, direction: 'create' }) }} />
                        </div>
                    </div>
                </div>

            </div>
            <TreatmentEpisodeModal
                show={modalShow.allow}
                onHide={() => setModalShow({ allow: false })}
                direction={modalShow.direction} {...(modalShow.direction == 'update' ? { rowData: modalShow.rowData } : null)}
                className="treatmentEpisodeModal" />
        </>
    )
}


function TreatmentEpisodeModal(props) {
    const patientNo = 65751
    //if direction == update then will be fetch ?
    const rowData = { ...props.rowData, /*some fetched rowData*/ }
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Patient's No.{patientNo} Treatment Episodes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <TreatmentEpisodeForm
                    closeModal={props.onHide}
                    direction={props.direction} {...(props.direction == 'update' ? { rowData: rowData } : null)}

                />
            </Modal.Body>
        </Modal>
    );
}
