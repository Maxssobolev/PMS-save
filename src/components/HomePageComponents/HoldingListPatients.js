import React, { useState } from 'react'
import { NothingFoundFiller } from './NothingFoundFiller'
import '../../assets/scss/modal.scss'
import { Modal } from 'react-bootstrap'
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination'
import CommonButton from '../ButtonControllers/CommonButton'
import Delete from '../Actions/Delete/Delete'
import HoldingListAddNewEntryForm from '../Forms/HoldingListAddNewEntryForm/HoldingListAddNewEntryForm'

export default function HoldingListPatients(props) {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowAddNewAntry, setModalShowAddNewAntry] = useState(false);

    return (
        <>
            {props.custom == undefined && <div className="widget-block">
                <div className="block-header" onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
                    Holding List Patients
                </div>
                <NothingFoundFiller />
            </div>
            }

            <HoldingListModal
                show={props.custom ? props.show : modalShow}
                onHide={() => props.custom ? props.setShow(false) : setModalShow(false)}
                className="holdingListModal"
                openHoldingListAddNewEntryModal={() => { setModalShowAddNewAntry(true); props.custom ? props.setShow(false) : setModalShow(false) }}
            />

            <HoldingListAddNewEntryModal
                show={modalShowAddNewAntry}
                onHide={() => { setModalShowAddNewAntry(false); props.custom ? props.setShow(true) : setModalShow(true) }}
                className="holdingListModalAddNewEnrtyModal"
            />
        </>
    )
}


//MODAL
function HoldingListModal(props) {
    const closeModal = props.onHide
    return (
        <Modal dialogClassName="modal-80w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Holding List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <HoldingList openHoldingListAddNewEntryModal={props.openHoldingListAddNewEntryModal} />
            </Modal.Body>
        </Modal>
    );
}
//MODAL
function HoldingListAddNewEntryModal(props) {
    const closeModal = props.onHide
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Holding List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <HoldingListAddNewEntryForm closeModal={closeModal} />
            </Modal.Body>
        </Modal>
    );
}



function HoldingList(props) {
    const [intialRowData, setInitialRowData] = useState([])
    const columns = [
        { title: 'Priority', field: 'priority', widthGrow: .7 },
        { title: 'Patient Name', field: 'patientName', widthGrow: .7 },
        { title: 'Appointment With', field: 'appointmentWith' },
        { title: 'Appointment Type', field: 'appointmentType' },
        { title: 'Next Appointment', field: 'nextAppointment' },
        { title: 'Location', field: 'location', widthGrow: .7 },
        { title: 'Expiry Date', field: 'expiryDate', widthGrow: .7 },
        { title: 'Mobile Tel', field: 'mobileTel', widthGrow: .5 },
        { title: 'Home Tel', field: 'homeTel', widthGrow: .5 },
        { title: 'Email', field: 'email', widthGrow: .7 },
        { title: 'Actions', field: 'actions', headerSort: false, widthGrow: .5 },
        { title: 'Date Added', field: 'dateAdded', widthGrow: .7 },
        { title: 'Last Modified', field: 'lastModified', widthGrow: .7 },
        { title: 'Notes', field: 'notes', widthGrow: .7 },
    ]

    const openHoldingListAddNewEntryModal = props.openHoldingListAddNewEntryModal
    return (
        <div className="holdingList">
            <div className="markers flex">
                <div className="marker green">
                    <div className="marker__color"></div>
                    <div className="marker__text">Urgent</div>
                </div>
                <div className="marker orange">
                    <div className="marker__color"></div>
                    <div className="marker__text">Next Available</div>
                </div>
                <div className="marker fiolent">
                    <div className="marker__color"></div>
                    <div className="marker__text">Anytime</div>
                </div>
            </div>

            <div className="_table">
                <TableWidthSearchAndPagination
                    columns={columns}
                    initialRowData={intialRowData}
                    customSearchWrapperClass="_search"
                    searchField="patientName"
                />
                <div className="btn-wrapper">
                    <Delete text="Delete All Expired" customClass="button button_cancel" handler={() => { }} />
                    <CommonButton text="Add new Entry" customClass="button_accent" handler={openHoldingListAddNewEntryModal} />
                </div>
            </div>
        </div>
    );
}
