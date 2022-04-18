import React, {useEffect, useState} from 'react'
import TableWidthSearchAndPagination from "../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import EuroIcon from '../../assets/img/icons/euro.svg'
import CommonButton from "../ButtonControllers/CommonButton";
import {Modal} from "react-bootstrap";
import CancelButton from "../ButtonControllers/CancelButton";
export default function TransactionDetails (props) {
    const [modalShowConfirmDelete, setModalShowConfirmDelete] = useState({ allow: false });
    const {rowdata} = props
    //seems to load anyway
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            addedBy: 'Chloe Cummings',
            type: 'Other',
            date: '2021-07-28',
            patientPaid: 33.82,
            thirdPartyPaid: 0,
            fromBalance: 0,
            total: 33.82,
            created: '25-08-2021 12:05:13'
        }
    ])
    const columns = [
        {title: 'Added by', field: 'addedBy'},
        {title: 'Type', field: 'type'},
        {title: 'Date', field: 'date', width: 90},
        {title: `Patient Paid,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;"} />`, field: 'patientPaid', headerSort: false,},
        {title: `Third Party Paid,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'thirdPartyPaid', headerSort: false,},
        {title: `From Balance,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'fromBalance', headerSort: false,},
        {title: `Total,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'total', headerSort: false, width: 90},
        {title: 'Created', field: 'created'},
    ]


    const [initialRowDataForCoversInvoices, setInitialRowDataForCoversInvoices] = useState([
        {
            id: 1,
            no: 40819,
            date: '2021-07-28',
            fao: '',
            total: 33.82,
            outstanding: 0,
        }
    ])
    const columnsForCoversInvoices = [
        {title: 'No', field: 'no', headerSort: false},
        {title: 'Date', field: 'date'},
        {title: 'FAO', field: 'fao', headerSort: false},
        {title: `Total,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'total', headerSort: false},
        {title: `Outstanding,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'outstanding', headerSort: false,},
    ]


    const handleDelete = (id, location, local) => {
        //Smth?
    }
    return (
        <>
            <div className="transactionDetails">
                <TableWidthSearchAndPagination
                    initialRowData={initialRowData}
                    columns={columns}
                />

                <div className="sectHeader">
                    Transaction Covers Invoices:
                </div>

                <TableWidthSearchAndPagination
                    initialRowData={initialRowDataForCoversInvoices}
                    columns={columnsForCoversInvoices}
                />
                <div className="btn-wrapper">
                    <CommonButton text="Delete this transaction" customClass="button_cancel" handler={()=> {
                        setModalShowConfirmDelete({ allow: true })

                    }} />
                </div>

            </div>
            <ConfirmDeleteModal
                show={modalShowConfirmDelete.allow}
                onHide={() => setModalShowConfirmDelete({ allow: false })}
                className="confirmDeleteModal"
                deleteFunc={handleDelete}

            />
        </>
    )
}

//z-index: 1055;
function ConfirmDeleteModal(props) {
    const closeModal = props.onHide

    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter" >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Transaction
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <div className="msg" style={{textAlign: 'center', width: '100%'}}>Are you shure?</div>
                <div className="btn-wrapper">
                    <CancelButton handler={closeModal} />
                    <CommonButton handler={() => {
                        props.deleteFunc('??ID??', 'profile', 'transactionDetails')
                        closeModal()
                    }} text="Delete" customClass="button_yellow" />
                </div>
            </Modal.Body>
        </Modal>
    );
}