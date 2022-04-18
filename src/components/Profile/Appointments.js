import React, { useState } from 'react';
import CommonButton from '../ButtonControllers/CommonButton';
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../Actions';
import { formatterStateColumn } from '../CommonUtils/CommonUtils';
import AppointmentForm from '../Forms/AppointmentForm/AppointmentForm';
import { Modal } from 'react-bootstrap';
import CancelButton from '../ButtonControllers/CancelButton';
import BookNewAppointment from '../Actions/BookNewAppointment/BookNewAppointment';
export default function Appointments(props) {
    const [modalShowEditAppointment, setModalShowEditAppointment] = useState({ allow: false });
    const [modalShowConfirmDelete, setModalShowConfirmDelete] = useState({ allow: false });
    const [modalNewAppointment, setModalNewAppointment] = useState(false);


    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='appointmentsTab'
            editDetails customHandlerEditDetails={() => { setModalShowEditAppointment({ allow: true }) }}
            consultation handlerConsultationArgs={cellData}
            changeTheState
            sendEmail
            sendSMS handlerSMSArgs={cellData}
            didNotAttend
            delete /*handlerDelete={handleDelete}*/ customHandlerDelete={() => { setModalShowConfirmDelete({ allow: true, id: id, local: 'appointmentsTab', deleteFunc: handleDelete }) }}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            date: '19-08-2012',
            state: 'SCHEDULED',
            practitioner: 'Glen Wilkson',
            type: 'PHP-PI',
            location: 'Sutton',
            startTime: '08:00',
            created: '23-07-21 09:00',
            createdBy: 'Glen Wilkson',
            lastModified: '23-07-21 09:00',
            actions: ''
        },
        {
            id: 2,
            date: '19-08-2012',
            state: 'COMPLETED',
            practitioner: 'Glen Wilkson',
            type: 'PHP-PI',
            location: 'Sutton',
            startTime: '08:00',
            created: '23-07-21 09:00',
            createdBy: 'Glen Wilkson',
            lastModified: '23-07-21 09:00',
            actions: ''
        }
    ])
    const columns = [
        { title: 'Date', field: 'date', widthGrow: 0.7 },
        { title: 'State', field: 'state', widthGrow: 1, formatter: (cell) => formatterStateColumn(cell) },
        { title: 'Practitioner', field: 'practitioner', widthGrow: 1 },
        { title: 'Type', field: 'type', widthGrow: 0.7 },
        { title: 'Location', field: 'location', widthGrow: .8 },
        { title: 'Start time', field: 'startTime', width: 90 },
        { title: 'Created', field: 'created', widthGrow: 0.8 },
        { title: 'Created by', field: 'createdBy', widthGrow: 1 },
        { title: 'Last Modified', field: 'lastModified', widthGrow: 1 },
        {
            title: 'Actions', field: 'actions', widthGrow: 1.7, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const handleDelete = (id, location, local) => {
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    return (
        <>
            <div className="appointmentsTab">
                <div className="mainArea">
                    <div className="widget-block">

                        <CommonButton text="New appointment" handler={() => { setModalNewAppointment(true) }} customClass="button_accent newAppointmentBtn" />

                        <div className="_table">
                            <TableWidthSearchAndPagination
                                initialRowData={initialRowData}
                                columns={columns}
                                customSearchWrapperClass="_search"
                                searchField="practitioner"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <EditAppointment
                show={modalShowEditAppointment.allow}
                rowdata={modalShowEditAppointment?.rowdata}
                onHide={() => setModalShowEditAppointment({ allow: false })}
                className="editAppointmentModal"
            />
            <ConfirmDeleteModal
                show={modalShowConfirmDelete.allow}
                rowdata={modalShowConfirmDelete}
                onHide={() => setModalShowConfirmDelete({ allow: false })}
                className="confirmDeleteModal"
            />

            <BookNewAppointment
                custom={true}
                close={() => setModalNewAppointment(false)}
                show={modalNewAppointment}
            />

        </>
    )
}



//MODAL
function EditAppointment(props) {
    const closeModal = props.onHide
    const rowData = props?.rowdata || {}
    return (
        <Modal size="lg" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <AppointmentForm cancel={closeModal} direction="update" />
            </Modal.Body>
        </Modal>
    );
}
//MODAL
function ConfirmDeleteModal(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata //id: id, local: 'appointmentsTab', deleteFunc: handleDelete
    const deleteFunc = rowData.deleteFunc
    const personName = 'Mr Omar'
    const dateTime = '09-09-2021 at 11:00'
    const otherPerson = 'Jason Spring'
    return (
        <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <div className="msg">Confirm deletion of the {personName} Appointment on {dateTime} with {otherPerson}</div>
                <div className="btn-wrapper">
                    <CancelButton handler={closeModal} />
                    <CommonButton handler={() => {
                        deleteFunc(rowData.id, 'profile', 'appointmentsTab')
                        closeModal()
                    }} text="Delete" customClass="button_yellow" />
                </div>
            </Modal.Body>
        </Modal>
    );
}