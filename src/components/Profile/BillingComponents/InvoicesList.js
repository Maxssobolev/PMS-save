import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';
import { formatterStateColumn } from '../../CommonUtils/CommonUtils';



export default function InvoicesList(props) {
    const setModalViewInvoice = props.setModalViewInvoice
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='billing/invoicesList'
            viewDetails customHandlerViewDetails={() => setModalViewInvoice({ allow: true })}
            sendEmail handlerEmail={() => { }}
            sendSMS handlerSMS={() => { }}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([

        {
            id: 1,
            state: 'PAID',
            actions: ''
        },

    ])
    const columns = [
        { title: 'No.', field: 'no',  width: 60,},
        { title: 'Template', field: 'template'},
        { title: 'Contact Person', field: 'contactPerson'},
        { title: 'Contact Company', field: 'contactCompany'},
        { title: 'FAO', field: 'fao',  width: 50,},
        { title: 'Invoice Sent', field: 'invoiceSent'},
        { title: 'State', field: 'state', formatter: (cell) => formatterStateColumn(cell), width: 90, cellClick: () => setModalViewInvoice({ allow: true }) },
        { title: 'Outstanding Balance', field: 'outstandingBalance'},
        { title: 'Created', field: 'created'},
        { title: 'Last Modified', field: 'lastModified'},
        { title: 'Performer Username', field: 'performerUsername'},
        {
            title: 'Actions', field: 'actions', headerSort: false, width: 80,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    return (
        <div className="invoicesList">


            <div className="widget-block">
                <div className="block-header block-header_mediumSize">
                    Invoices List
                </div>


                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="state" //??
                    />
                </div>
            </div>
        </div>

    )
}