import React, { useState, Component } from 'react'
import { Modal } from 'react-bootstrap';
import '../../../assets/scss/main.scss'
import '../../../assets/scss/modal.scss'

import "tabulator-tables/dist/css/tabulator.min.css";
import '../../../assets/scss/myTabulator.scss'
import { ReactTabulator } from "react-tabulator";
import { rowData } from './callRequestsTESTROWS'

class ModalWithSortTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: [10, 25, 50, 100],
            config: {
                data: [] /*для теста this.props.data.rowData*/,
                columns: this.props.data.tableHeaders,
                layout: "fitColumns",
                options: {
                    placeholder: "<span class='noDataAvailable'>No data available in table</span>",
                    pagination: 'local',
                    paginationSize: 25,
                    resizableColumns: false,
                    height: '100%',

                }
            }
        }
    }


    render() {

        return (
            <Modal dialogClassName="modal-80w" {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <div className="anotherTitle">List</div>
                    <div className="itemsPerPageSelect">
                        <span>Show</span>
                        <select name="itemsPerPage" onChange={(e) => {

                            this.setState((prev) => ({
                                config: {
                                    ...prev.config,
                                    options: {
                                        pagination: 'local',
                                        paginationSize: e.target.value
                                    }

                                },

                            }))

                        }}>
                            {this.state.select.map((val) =>
                                <option
                                    value={val}
                                    key={`${val}__itemsPerPage`}
                                    {...(
                                        val == this.state.config.options.paginationSize ?
                                            { defaultValue: 'yes' }
                                            :
                                            null
                                    )}
                                >{val}</option>)}
                        </select>
                        <span>entries</span>
                    </div>
                    <ReactTabulator {...this.state.config} />

                </Modal.Body>
            </Modal >
        );
    }
}


export default function CallRequests() {
    const [modalShow, setModalShow] = useState(false);
    const title = "Call Requests"
    //TO LOAD
    const tableHeaders = [
        {
            title: "User", //Название поля, заголовок
            field: 'user', //КЛЮЧ связанного с заголовком поля в массиве со строками
        },
        {
            title: "Patient",
            field: 'patient',
        },
        {
            title: "Person Contact",
            field: 'personContact',
            width: 125
        },
        {
            title: "Company Contact",
            field: 'companyContact',
            width: 150
        },
        {
            title: "Subject",
            field: 'subject',
        },
        {
            title: "Phone",
            field: 'phone',

        },
        {
            title: "Date",
            field: 'date',
        },
        {
            title: "Time",
            field: 'time',
        },
        {
            title: "Sent Date",
            field: 'sentDate',
        },
        {
            title: "Actions",
            field: 'actions',
        },

    ]


    return (
        <>
            <button href="/" className="topMenu-nav__item link" onClick={() => setModalShow(true)}>{title}</button>
            <ModalWithSortTable
                title={title}
                data={{
                    tableHeaders,
                    rowData
                }}

                show={modalShow}
                onHide={() => setModalShow(false)}
                className="callRequests"


            />
        </>
    );
}

