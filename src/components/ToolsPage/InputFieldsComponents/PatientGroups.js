import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import { reactFormatter } from "react-tabulator";
import Actions from "../../Actions";
import CommonButton from '../../ButtonControllers/CommonButton';

export default function PatientGroups(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='inputFields/patientGroupsTab'
            editDetails customHandlerEditDetails={() => { }}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            group: 'Private Patients',
            alias: 'PP',
            invoiceTemplate: '',
            appointmentType: 'PP-FU',
            created: '23-10-2018 21:37',
            lastModified: '23-10-2018 21:37',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Group', field: 'group', headerSort: false, width: 60, },
        { title: 'Alias', field: 'alias', headerSort: false, width: 40, },
        { title: 'Invoice Template', field: 'invoiceTemplate', headerSort: false },
        { title: 'Appointment Type', field: 'appointmentType', headerSort: false },
        { title: 'Created', field: 'created', headerSort: false },
        { title: 'Last Modified	', field: 'lastModified', headerSort: false },

        {
            title: 'Actions', field: 'actions', width: 50, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <div className="tab-component">
            <div className="tab-component-header">
                <div className="header">
                    Patient Groups

                </div>
                <CommonButton text="Add new" handler={() => { }} customClass="button_accent" />
            </div>

            <TableWidthSearchAndPagination
                columns={columns}
                initialRowData={initialRowData}
                showEntries={false}
            />
        </div>
    )
}