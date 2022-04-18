import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';
import SendEmail from '../../Actions/SendEmail/SendEmail';
import { formatterStateColumn, formatterColorColumn } from '../../CommonUtils/CommonUtils';
import SendSMS from '../../Actions/SendSMS/SendSMS';


export default function SMSLog(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='alertLogTab/smsLog'
            viewDetails
            delete handlerDelete={handleDelete}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([

        {
            id: 1,
            state: 'SENT',
            phone: '3525565612123',
            practitioner: 'Automated',
            templateName: 'Appt Reminder NHS',
            created: '23-07-21 09:00',
            actions: ''
        },
        {
            id: 2,
            state: 'SENT',
            phone: '3525565612123',
            practitioner: 'Lacey Toop',
            templateName: 'Appt Reminder NHS',
            created: '23-07-21 09:00',
            actions: ''
        },
    ])
    const columns = [
        { title: 'State', field: 'state', formatter: (cell) => formatterStateColumn(cell), widthGrow: .5 },
        { title: 'Phone', field: 'phone' },
        { title: 'Practitioner', field: 'practitioner' },
        { title: 'Template Name', field: 'templateName' },
        { title: 'Created', field: 'created' },
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
        <div className="smsLog">


            <div className="widget-block">
                <div className="block-header block-header_mediumSize">
                    SMS Log
                </div>
                <div className="btn-wrapper">
                    <SendSMS widthTextSMS handlerSMS={() => { }} />
                </div>

                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="practitioner" //??
                    />
                </div>
            </div>
        </div>

    )
}