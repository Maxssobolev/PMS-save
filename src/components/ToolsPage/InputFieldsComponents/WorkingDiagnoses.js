import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import { reactFormatter } from "react-tabulator";
import Actions from "../../Actions";
import CommonButton from '../../ButtonControllers/CommonButton';

export default function WorkingDiagnoses(props) {


    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='inputFields/workingDiagnosesTab'
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            workingDiagnoses: 'Accessory Navicular',
            created: '23-10-2018 21:37',
            lastModified: '23-10-2018 21:37',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Working Diagnosis', field: 'workingDiagnoses', headerSort: false },
        { title: 'Created', field: 'created', headerSort: false },
        { title: 'Last Modified	', field: 'lastModified', headerSort: false },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <div className="tab-component">
            <div className="tab-component-header">
                <div className="header">
                    Working Diagnoses
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