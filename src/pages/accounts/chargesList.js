import React, { useState } from 'react'
import TableWidthSearchAndPagination from '../../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination'
import EuroIcon from '../../assets/img/icons/euro.svg'
import Actions from '../../components/Actions'
import { reactFormatter } from 'react-tabulator'
import { Redirect } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import CreateChargeForm from '../../components/Forms/CreateChargeForm/CreateChargeForm'

export default function ChargesListAccounts() {
    const [redirect, setRedirect] = useState({ allow: false })
    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData_chargeList((prev) => prev.filter((itm) => itm.id != id))
    }

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        const actions = cellData.actions;

        if (actions == 'only-view') {
            return <Actions
                id={id}
                viewDetails
            />;
        } else {
            return <Actions
                id={id}
                //wich actions needs to be included:
                editDetails customHandlerEditDetails={() => { setModalShow({ allow: true, rowdata: cellData }) }}
                quickPayment
                delete handlerDelete={handleDelete}
            />;
        }

    }


    const [initialRowData_chargeList, setInitialRowData_chargeList] = useState([
        {
            id: '1',
            no: '',
            patient: 'Loras',
            diaryUser: 'Glen Wilkson',
            date: '2002/10/10',
            description: 'BBBB',
            total: '',
            created: '',
            lastModified: '',
            actions: '',
            appt: ''

        },
    ])
    const columns = [
        { title: 'No', field: 'no', },
        {
            title: 'Patient', field: 'patient', cellClick: function (e, cell) {
                //simpliest way to locate to profile page
                const rowInfo = cell._cell.row.data
                setRedirect({ allow: true, id: rowInfo.id })
            }
        },
        { title: 'Diary User', field: 'diaryUser', },
        { title: 'Appt', field: 'appt', },
        { title: 'Date', field: 'date', },
        { title: 'Description', field: 'description', },
        { title: `Total, <img style="margin-bottom:0.5em;" src=${EuroIcon}>`, field: 'total' },
        { title: 'Created', field: 'created' },
        { title: 'Last Modified', field: 'lastModified' },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const [modalShow, setModalShow] = useState({ allow: false });

    if (redirect.allow) {
        return <Redirect to={{
            pathname: '/accounts/profile',
            state: {
                id: redirect?.id
            }
        }} />
    } else {
        return (
            <>
                <CreateCharge
                    show={modalShow.allow}
                    rowdata={modalShow.rowdata}
                    onHide={() => setModalShow({ allow: false })}
                    className="createChargeModal"
                />
                <div className="chargesList">
                    <section className="header-section">
                        <h1 className="page-header">Charges List</h1>
                    </section>
                    <section>
                        <div className="widget-block">
                            <TableWidthSearchAndPagination
                                initialRowData={initialRowData_chargeList}
                                columns={columns}
                                customSearchWrapperClass="_search"
                                searchField="patient"
                            />
                        </div>
                    </section>


                </div>
            </>);
    }
}

//MODAL
function CreateCharge(props) {
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
