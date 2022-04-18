import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import { reactFormatter } from "react-tabulator";
import Actions from "../../Actions";
import CommonButton from '../../ButtonControllers/CommonButton';

export default function EmailTemplates(props) {


    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='templates/bodyPartsTab'
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            name: 'PP IA Booking Email',
            subject: 'New Patient Information and Details',
            template: 'PP IA Booking Email',
            attachment: 'uploads/ misc_files/ download_ (13).jpg',
            created: '23-10-2018 21:37',
            lastModified: '23-10-2018 21:37',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Name', field: 'name', headerSort: false, width: 60 },
        { title: 'Subject', field: 'subject', headerSort: false },
        { title: 'Template', field: 'template', headerSort: false },
        { title: 'Attachment', field: 'attachment', headerSort: false },
        { title: 'Created', field: 'created', headerSort: false, width: 60 },
        { title: 'Last Modified	', field: 'lastModified', headerSort: false, width: 60 },

        {
            title: 'Actions', field: 'actions', width: 60, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <div className="tab-component">
            <div className="tab-component-header">
                <div className="header">
                    Email Templates

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