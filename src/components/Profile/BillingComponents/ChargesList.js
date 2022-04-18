import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';
import EuroIcon from '../../../assets/img/icons/euro.svg'
import {Modal} from "react-bootstrap";
import CreateChargeForm from "../../Forms/CreateChargeForm/CreateChargeForm";


export default function ChargesList(props) {
    const [modalShow, setModalShow] = useState({ allow: false });

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='billing/chargesList'
            editDetails customHandlerEditDetails={() => { setModalShow({ allow: true, rowdata: cellData }) }}
            delete handlerDelete={handleDelete}

        />;
    }

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    const [initialRowData, setInitialRowData] = useState([

        {
            id: 1,
            no: 40132,
            invoice: 23486,
            diaryUser: 'Gabi Guscott',
            appt: 'NHS-FU',
            description: 'NHS Wandsworth FU',
            total: 32.90,
            created: '17-02-2021 17:34',
            lastModified: '17-02-2021 17:34',
            actions: ''
        },

    ])
    const columns = [
        {title: 'No.', field: 'no', width: 60},
        {title: 'Invoice', field: 'invoice'},
        {title: 'Diary User', field: 'diaryUser'},
        {title: 'Appt', field: 'appt'},
        {title: 'Description', field: 'description'},
        {title: `Total,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;"} />`, field: 'total'},
        {title: 'Created', field: 'created'},
        {title: 'Last Modified', field: 'lastModified'},

        {
            title: 'Actions', field: 'actions', headerSort: false, width: 100,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]


    return (
        <>
        <div className="chargesList">
            <div className="widget-block">
                <div className="block-header block-header_mediumSize">
                    Charges List
                </div>
                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="" //??
                    />
                </div>
            </div>
        </div>
        <CreateCharge
            show={modalShow.allow}
            rowdata={modalShow.rowdata}
            onHide={() => setModalShow({ allow: false })}
            className="createChargeModal"
        />
        </>

    )
}


//MODAL
function CreateCharge(props) {
    const closeModal = props.onHide
    const rowData = props.rowdata
    return (
        <Modal size="lg" onHide={props.onHide} show={props.show} className={props.className} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update A Charge
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <CreateChargeForm closeModal={closeModal} rowData={rowData} direction='update' />
            </Modal.Body>
        </Modal>
    );
}
