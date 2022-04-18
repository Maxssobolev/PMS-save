import React, { useState } from 'react';
import CommonButton from '../ButtonControllers/CommonButton';
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../Actions';
import Print from '../Actions/Print/Print';
import SendEmail from '../Actions/SendEmail/SendEmail';
import Consultation from '../Actions/Consultation/Consultation';
import { Modal } from 'react-bootstrap';
import DocumentsModal from './DocumentsModal';

export default function Consultations(props) {
    const [modalConsultation, setModalConsultation] = useState({ allow: false })
    const [modalDocumentShow, setModalDocumentShow] = useState(false)
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='consultationsTab'
            editDetails customHandlerEditDetails={() => { setModalConsultation({ allow: true, direction: 'update', rowdata: cellData }) }}
            print handlerPrint={() => { }}
            sendEmail handlerEmail={() => { }}
            delete handlerDelete={handleDelete}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            practitioner: 'Glen Wilkson',
            isCompleted: 'No',
            startTime: '23-07-21 09:00',
            created: '23-07-21 09:00',
            lastModified: '23-07-21 09:00',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Practitioner', field: 'practitioner' },
        { title: 'Is Completed', field: 'isCompleted' },
        { title: 'Start Time', field: 'startTime' },
        { title: 'Created', field: 'created' },
        { title: 'Last Modified', field: 'lastModified' },

        {
            title: 'Actions', field: 'actions', headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    return (
        <>
            <div className="consultationsTab">
                <div className="mainArea">
                    <div className="widget-block">
                        <div className="btn-wrapper">
                            <div className="wrapper-actions">
                                <SendEmail
                                    sendEmailAll
                                    handlerEmail={() => { /* smth on backend */ }}
                                />
                                <Print
                                    printAll
                                    handlerPrint={() => {/* smth on backend */ }}
                                />
                            </div>
                            <CommonButton text="Add Consultation" handler={() => setModalConsultation({ allow: true, direction: 'create' })} customClass="addConsultationBtn" />
                            <CommonButton text="Add Document" handler={() => setModalDocumentShow(true)} customClass="addDocumentBtn" />
                        </div>

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
            <Consultation
                custom={true}
                close={() => setModalConsultation({ allow: false })}
                show={modalConsultation.allow}
                rowdata={modalConsultation.rowdata}
                direction={modalConsultation.direction}
            />
            <DocumentsModal
                show={modalDocumentShow}
                rowdata={{ rowData: props.patientData, patientFio: props.patient_fio }}
                onHide={() => setModalDocumentShow(false)}
                className="documentsModal"
                contolShowing={setModalDocumentShow}
            />

        </>
    )
}

