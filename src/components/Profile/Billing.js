import React, { useState } from 'react';
import ChargesList from './BillingComponents/ChargesList';
import InvoicesList from './BillingComponents/InvoicesList';
import PaymentsList from './BillingComponents/PaymentsList';
import CreateChargeForm from '../Forms/CreateChargeForm/CreateChargeForm'
import { Modal } from 'react-bootstrap';
import CreateInvoiceForm from '../Forms/CreateInvoiceForm/CreateInvoiceForm';
import InvoiceView from "../InvoiceView/InvoiceView";
import TransactionDetails from "../TransactionDetails/TransactionDetails";
import SetupInvoiceForm from "../Forms/SetupInvoiceForm/SetupInvoiceForm";
export default function Billing(props) {
    const [billingData, setBillingData] = useState({
        moneyPaid: '23',
        moneyOwed: '32',
        balance: '12'
    })
    const [modalAllocatePayment, setModalAllocatePayment] = useState({ allow: false });
    const [modalSetupInvoice, setModalSetupInvoice] = useState({ allow: false });
    const [modalApplyCharge, setModalApplyCharge] = useState({ allow: false });
    const [modalInvoice, setModalInvoice] = useState({ allow: false });
    const [modalViewInvoice, setModalViewInvoice] = useState({ allow: false });
    const [modalTransactionDetails, setModalTransactionDetails] = useState({ allow: false });


    return (
        <>
            <div className="billingTab">
                <div className="mainArea">
                    <div className="topControllers">
                        <button onClick={() => { setModalApplyCharge({ allow: true, }) }} className="button button_special blue">Apply a Charge</button>
                        <button onClick={() => { setModalInvoice({ allow: true, }) }} className="button button_special fiolent">Raise an Invoice</button>
                        <button onClick={() => { setModalAllocatePayment({ allow: true })}} className="button button_special almostTransparent">Allocate a Payment</button>
                        <button onClick={() => { }} className="button button_special blue">Send Outstanding Invoices</button>
                        <button onClick={() => { setModalSetupInvoice({ allow: true, })}} className="button button_special fiolent">Invoice Reminders Repeater</button>
                    </div>
                    <div className="smallStatistic">
                        <div> Money paid: <span>{billingData?.moneyPaid}</span></div>
                        <div> Money owed: <span>{billingData?.moneyOwed}</span></div>
                        <div> Balance: <span>{billingData?.balance}</span></div>
                    </div>

                    <InvoicesList setModalViewInvoice={setModalViewInvoice} />
                    <ChargesList />
                    <PaymentsList />
                </div>
            </div>
            <ApplyChargeModal
                show={modalApplyCharge.allow}
                rowdata={modalApplyCharge.rowdata}
                onHide={() => setModalApplyCharge({ allow: false })}
                className="createChargeModal"
            />
            <CreateInvoiceModal
                show={modalInvoice.allow}
                rowdata={modalInvoice.rowdata}
                onHide={() => setModalInvoice({ allow: false })}
                className="createInvoiceModal"
            />
            <ViewInvoiceModal
                openTransactionModalAndCloseThis={() => {setModalTransactionDetails({allow:true}); setModalViewInvoice({ allow: false })}}
                setRowDataForTransactionsModal = {(row) => setModalTransactionDetails({allow: true, rowdata: row})}
                show={modalViewInvoice.allow}
                rowdata={modalViewInvoice.rowdata}
                onHide={() => setModalViewInvoice({ allow: false })}
                className="viewInvoiceModal"
            />
            <TransactionDetailsModal
                closeThisModalAndShowViewInvoice={() => {setModalTransactionDetails({allow:false}); setModalViewInvoice({ allow: true })}}
                show={modalTransactionDetails.allow}
                rowdata={modalTransactionDetails.rowdata}
                onHide={() => {setModalTransactionDetails({allow:false}); setModalViewInvoice({ allow: true })}}
                className="transactionDetailsModal"
            />
            <SetupInvoiceModal
                show={modalSetupInvoice.allow}
                onHide={() => setModalSetupInvoice({ allow: false })}
                className="setupInvoiceModal"
            />
            <AllocatePaymentModal
                show={modalAllocatePayment.allow}
                onHide={() => setModalAllocatePayment({ allow: false })}
                className="allocatePaymentModal"
                invoices={[]}
            />
        </>
    )
}

//MODAL
function AllocatePaymentModal(props) {
    const closeModal = props.onHide
    const invoices = props.invoices.length > 0 ? props.invoices : null

    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter" {...(invoices ? null : {centered: 'yes'})}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {invoices ? '' : 'No Invoices'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                {invoices ? '' : 'This patient currently has no invoices. You need to create an invoice before making a payment.' }

            </Modal.Body>
        </Modal>
    );
}

//MODAL
function SetupInvoiceModal(props) {
    const closeModal = props.onHide
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Setup Invoice Reminders
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <SetupInvoiceForm closeModal={closeModal} />
            </Modal.Body>
        </Modal>
    );
}


//MODAL
function ApplyChargeModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    return (
        <Modal size="lg" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create A Charge
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <CreateChargeForm closeModal={closeModal} rowData={rowData} />
            </Modal.Body>
        </Modal>
    );
}


//MODAL
function CreateInvoiceModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    return (
        <Modal size="lg" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create An Invoice
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <CreateInvoiceForm closeModal={closeModal} rowData={rowData} />
            </Modal.Body>
        </Modal>
    );
}

//MODAL
function ViewInvoiceModal(props) {
    const openTransactionModalAndCloseThis = props.openTransactionModalAndCloseThis
    const setRowDataForTransactionsModal = props.setRowDataForTransactionsModal
    const closeModal = props.onHide
    const rowData = props.rowdata
    const nomer = 13234
    return (
        <Modal dialogClassName="modal-80w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Invoice #{nomer}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <InvoiceView

                    closeModal={closeModal}
                    setRowDataForTransactionsModal={setRowDataForTransactionsModal}
                    openTransactionModalAndCloseThis={openTransactionModalAndCloseThis}
                />
            </Modal.Body>
        </Modal>
    );
}

//MODAL
function TransactionDetailsModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata


    return (
        <Modal dialogClassName="modal-80w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Transaction Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <TransactionDetails
                    closeModal={closeModal}
                    rowdata={rowData}
                />
            </Modal.Body>
        </Modal>
    );
}

