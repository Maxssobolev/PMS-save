import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { handleDownload } from '../CommonUtils/CommonUtils';
import { ReactComponent as DownloadIcon } from '../../assets/img/icons/download.svg'
import { pv } from '../../projectVars'
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../Actions';
import { Formik, Form, Field } from 'formik';
import CommonButton from '../ButtonControllers/CommonButton';
import UploadComponent from '../Forms/UploadComponent/UploadComponent';
import SubmitButton from '../ButtonControllers/SubmitButton';
import CancelButton from '../ButtonControllers/CancelButton';


export default function DocumentsModal(props) {
    const closeModal = props.onHide
    const { rowData, patientFio } = props.rowdata
    const [showExtModal, setShowExtModal] = useState({ allow: false })
    const contolShowing = props.contolShowing

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData_chargeList((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            sendEmail handlerEmail={() => {/* smth */ }}
            editDetails customHandlerEditDetails={() => { contolShowing(false); setShowExtModal({ allow: true, rowdata: cellData, patientFio: patientFio, direction: 'update' }) }}
            delete handlerDelete={handleDelete}
        />;


    }
    function Download(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <DownloadIcon style={{ margin: '0 auto', display: 'block' }} width={18} height={18} onClick={() => handleDownload(cellData.download, pv.DOCUMENTS_PATH)} />


    }
    const [initialRowData_chargeList, setInitialRowData_chargeList] = useState([
        {
            id: '1',
            no: '90392',
            heading: 'Initial Assessment',
            nameLink: 'letter-1627398097.pdf',
            notes: 'Letter file	',
            addedBy: 'Lilla Gyuris	',
            dateAdded: '27-07-2021 16:00',
            download: 'letter-1627398097.pdf',
            fileLink: '/',
            actions: ''
        },
    ])
    const columns = [
        { title: 'No', field: 'no', width: 80 },
        {
            title: 'Heading', field: 'heading', formatter: function (cell, formatterParams, onRendered) {
                //open File
                const rowInfo = cell._cell.row.data
                return "<a href='" + rowInfo.fileLink + "' target='_blank'>" + rowInfo.heading + "</a>"
            }
        },
        {
            title: 'Name/Link', field: 'nameLink', formatter: function (cell, formatterParams, onRendered) {
                //open File
                const rowInfo = cell._cell.row.data
                return "<a href='" + rowInfo.fileLink + "' target='_blank'>" + rowInfo.nameLink + "</a>"
            }
        },
        { title: 'Notes', field: 'notes', },
        { title: 'Added By', field: 'addedBy', },
        { title: 'Date Added', field: 'dateAdded', },
        {
            title: `Download`, field: 'download', headerSort: false, width: 80,
            formatter: reactFormatter(<Download />)
        },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <>
            <Modal dialogClassName="modal-80w" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {patientFio} Documents
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <div className="btn-wrapper">
                        <CommonButton text="Add new document" handler={() => { contolShowing(false); setShowExtModal({ allow: true, rowdata: '', patientFio: patientFio, direction: 'create' }) }} customClass="button_accent" />
                    </div>

                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData_chargeList}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="heading" //?
                        searchPlaceholder="Search documents"
                    />
                </Modal.Body>
            </Modal>

            <DocumentsEdit
                show={showExtModal.allow}
                rowdata={showExtModal}
                onHide={() => { setShowExtModal({ allow: false }); contolShowing(true) }}
                className="documentsEditForm"
            />
        </>
    );
}

function DocumentsEdit(props) {
    const closeModal = props.onHide
    const { patientFio, rowdata, direction } = props.rowdata

    return (
        <>
            <Modal size="md" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {patientFio} Documents
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <div className="documentsEditForm">
                        <Formik
                            initialValues={
                                {
                                    heading: direction == 'update' ? rowdata?.heading : '',
                                    notes: direction == 'update' ? rowdata?.notes : '',
                                    fileOrLink: 'link',
                                    attachment: '',
                                }
                            }
                        >
                            {(props) => (
                                <Form>

                                    <div className="flex">
                                        <div className="field-wrapper flex-grow">
                                            <Field
                                                component="input"
                                                name="heading"
                                                className="field field_100"
                                            />
                                            <span>
                                                Heading:
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="field-wrapper flex-grow">
                                            <Field
                                                component="textarea"
                                                name="notes"
                                                className="field field_100 field_textarea"
                                                placeholder="Notes"
                                                style={{ padding: '  12px' }}
                                            />
                                        </div>
                                    </div>


                                    {direction == 'create' && (
                                        <div className="flex">
                                            <div className="field-wrapper">
                                                <label>
                                                    <Field type="radio" name="fileOrLink" value="file" />
                                                    File
                                                </label>
                                            </div>
                                            <div className="field-wrapper">
                                                <label>
                                                    <Field type="radio" name="fileOrLink" value="link" />
                                                    Link
                                                </label>
                                            </div>
                                        </div>

                                    )}
                                    {(props.values.fileOrLink == 'file' && direction == 'create') ? (
                                        <div className="flex file">
                                            <div className="field-wrapper flex-grow">
                                                <UploadComponent
                                                    setFieldValues={props.setFieldValue}
                                                    field="attachment"
                                                />
                                                <span>Drop file here or click to choose:</span>
                                            </div>
                                        </div>
                                    ) :
                                        direction == 'create' ?
                                            (
                                                <div className="flex link">
                                                    <div className="field-wrapper flex-grow">
                                                        <Field

                                                            component="input"
                                                            name="attachment"
                                                            className="field field_100"
                                                        />
                                                        <span>
                                                            Link:
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : null}

                                    <div className="controllers">
                                        <SubmitButton text="Save" />
                                        <CancelButton handler={() => closeModal()} />
                                    </div>
                                </Form>

                            )}
                        </Formik>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}