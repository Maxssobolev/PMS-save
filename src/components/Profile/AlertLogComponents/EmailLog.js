import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';
import SendEmail from '../../Actions/SendEmail/SendEmail';
import { formatterStateColumn, formatterColorColumn } from '../../CommonUtils/CommonUtils';


export default function EmailLog(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='alertLogTab/emailLog'
            viewDetails
            delete handlerDelete={handleDelete}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            state: 'SENT',
            delivered: 'No',
            read: 'No',
            toEmail: 'email@email.ru',
            CCEmail: '',
            fromUser: 'email@email.ru',
            fromName: 'email@email.ru',
            thirdParty: '',
            subject: 'NHS Appointment Confirmation',
            type: 'Email',
            sentDate: '23-07-21 09:00',
            actions: ''
        },
        {
            id: 1,
            state: 'BOUNCE',
            delivered: 'No',
            read: 'No',
            toEmail: 'email@email.ru',
            CCEmail: '',
            fromUser: 'email@email.ru',
            fromName: 'email@email.ru',
            thirdParty: '',
            subject: 'NHS Appointment Confirmation',
            type: 'Email',
            sentDate: '23-07-21 09:00',
            actions: ''
        },
    ])
    const columns = [
        { title: 'State', field: 'state', formatter: (cell) => formatterStateColumn(cell), widthGrow: 1, },
        { title: 'Delivered', field: 'delivered', widthGrow: 1, formatter: (cell) => formatterColorColumn(cell) },
        { title: 'Read', field: 'read', widthGrow: 0.6, formatter: (cell) => formatterColorColumn(cell) },
        { title: 'To Email', field: 'toEmail' },
        { title: 'CC Email', field: 'CCEmail' },
        { title: 'From User', field: 'fromUser' },
        { title: 'From Name', field: 'fromName' },
        { title: 'Third Party', field: 'thirdParty', headerSort: false, },
        { title: 'Subject', field: 'subject' },
        { title: 'Type', field: 'type', widthGrow: .5 },
        { title: 'Sent Date', field: 'sentDate', widthGrow: .8 },
        {
            title: 'Actions', field: 'actions', headerSort: false, width: 70,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    return (
        <div className="emailLog">


            <div className="widget-block">
                <div className="block-header block-header_mediumSize">
                    Email Log
                </div>
                <div className="btn-wrapper">
                    <SendEmail widthTextEmail handlerEmail={() => { }} />
                </div>

                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="toEmail" //??
                    />
                </div>
            </div>
        </div>

    )
}