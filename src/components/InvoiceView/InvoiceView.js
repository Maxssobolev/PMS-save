import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import moment from "moment";
import {ReactComponent as EuroIcon} from "../../assets/img/icons/euro.svg";
import {roundNumber} from "../CommonUtils/CommonUtils";
import ViewDetails from "../Actions/ViewDetails/ViewDetails";
import {Formik, Form, Field} from "formik";
import CommonButton from "../ButtonControllers/CommonButton";
import SubmitButton from "../ButtonControllers/SubmitButton";


export default function InvoiceView(props){
    const openTransactionModalAndCloseThis = props.openTransactionModalAndCloseThis
    const setRowDataForTransactionsModal = props.setRowDataForTransactionsModal
    console.log(setRowDataForTransactionsModal)
    const closeModal = props.closeModal
    const smallStatistic = {invoiceNo: 23, accountNo: 32, date: 12}
    //this will load?
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
        addresLine1: '21 Greville Avenue',
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
    const flat = 15
    const from = {
        name: "Surrey Physio",
        address: '21 Greville Avenue',
        phone: 89344245523,
        web: 'surrey.com'
    }

    const [transactions, setTransactions] = useState([
        {
            date: '11-11-21',
            type: 'Card payment',
            paudBy: 'Mrs Maria Wringston',
            total: 40
        }
    ])

    const [initialTableRowData, setInitialTableRowData] = useState([
        {
            date: '11-11-21',
            treatmentDate: '11-11-21',
            chargeCost: 40,
            qty: 1
        }
    ])
    const initialTableRowDataTotal = initialTableRowData.reduce((accumulator, current) => accumulator + roundNumber(current.qty * current.chargeCost, 2), 0)

    return (
        <div className="InvoiceView">
            <div className="smallStatistic">
                <div> Invoice No: <span>{smallStatistic?.invoiceNo}</span></div>
                <div> Account No: <span>{smallStatistic?.accountNo}</span></div>
                <div> Date: <span>{smallStatistic?.date}</span></div>
            </div>

            <div className="commonInformation">
                <Row>
                    <Col xs={3}>For: {`${patientData.title} ${patientData.firstName} ${patientData.lastName}`}</Col>
                    <Col xs={4}>Personal Information</Col>
                    <Col xs={4}>From: {from.name}</Col>
                </Row>
                <Row>
                    <Col xs={3}><span className="_bold">Email: </span> {patientData.email}</Col>
                    <Col xs={2}>{`${patientData.title} ${patientData.firstName} ${patientData.lastName}`}</Col>
                    <Col xs={2}>Flat {flat}</Col>
                    <Col xs={4}><span className="_bold">Address: </span>{from.address}</Col>
                </Row>
                <Row>
                    <Col xs={3}><span className="_bold">Address: </span> {patientData.addresLine1}</Col>
                    <Col xs={2}>{`${patientData.sex} Aged ${moment(patientData.dob).fromNow(true)}`}</Col>
                    <Col xs={2}>{patientData.city}</Col>
                    <Col xs={4}><span className="_bold">Phone: </span>{from.phone}</Col>
                </Row>
                <Row>
                    <Col xs={3}><span className="_bold">Town/City: </span> {patientData.city}</Col>
                    <Col xs={2}>{`${patientData.dob}`}</Col>
                    <Col xs={2}>SW11 5BG</Col>
                    <Col xs={4}><span className="_bold">Web: </span>{from.web}</Col>
                </Row>
                <Row>
                    <Col xs={3}><span className="_bold">Postcode: </span> {patientData.postcode}</Col>
                    <Col xs={2}>{patientData.email}</Col>
                    <Col xs={2}>07403521310</Col>
                    <Col xs={4}></Col>
                </Row>
            </div>

            <div className="table-wrapper">
                <table className="_table">
                    <thead>
                    <tr className="th-row">
                        <th className="clmn-15">Date</th>
                        <th className="clmn-20">Treatment Date</th>
                        <th className="clmn-20">Charge Cost</th>
                        <th className="clmn-30">Quantity</th>
                        <th className="clmn-15">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {initialTableRowData.map((row, index) => {
                        return (
                            <tr key={`${index}__viewInvoice_TableRow`}>
                                <td className="clmn-15">{row.date}</td>
                                <td className="clmn-20">{row.treatmentDate}</td>
                                <td className="clmn-20">{row.chargeCost}</td>
                                <td className="clmn-30">{row.qty} </td>
                                <td className="clmn-15">
                                    {roundNumber(row.qty * row.chargeCost, 2)} <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} />
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td><td></td><td></td>
                            <td>
                                Total
                            </td>
                            <td>
                                {initialTableRowDataTotal} <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} />
                            </td>
                        </tr>
                        <tr>
                            <td></td><td></td><td></td>
                            <td>
                                Total payments received
                            </td>
                            <td>
                                {initialTableRowDataTotal} <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} />
                            </td>
                        </tr>
                        <tr>
                            <td></td><td></td><td></td>
                            <td>
                                Balance outstanding
                            </td>
                            <td>
                                0 <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="transactions">
                <div className="sectHeader">
                    Transactions
                </div>

                <table className="_table">
                    <thead>
                    <tr className="th-row">
                        <th className="clmn-15">Date</th>
                        <th>Type</th>
                        <th className="clmn-30">Paud by</th>
                        <th className="clmn-15">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((row, index) => {
                        return (
                            <tr key={`${index}__viewInvoice_TableRow`}>
                                <td className="clmn-15">{row.date}</td>
                                <td >{row.type}</td>
                                <td className="clmn-30">{row.paudBy}</td>
                                <td className="clmn-15">
                                    <div>
                                        <span>{row.total} <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} /></span>
                                        <span>
                                            <ViewDetails
                                                customHandlerViewDetails={() => {openTransactionModalAndCloseThis(); setRowDataForTransactionsModal(row)}}

                                            />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>

                </table>

            </div>

            <Formik
                initialValues={
                    {issued: false}
                }
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props)=>(
                    <Form>
                        <label>
                            <Field
                                type="checkbox"
                                name="issued"
                                className="checkbox"

                            />
                            <span>Issued</span>
                        </label>
                        <div className="btn-wrapper">
                            <SubmitButton text="Print For Patient" />
                            <CommonButton text="Email to Patient" handler={() => { }} />
                            <CommonButton text="SMS to Patient" customClass="button_accent" handler={() => { }} />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>

    )
}