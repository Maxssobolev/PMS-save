import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import CommonButton from '../../ButtonControllers/CommonButton';
import Actions from '../../Actions';
export default function MergeFields(props) {


    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='inputFields/mergeFieldsTab'
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            mergeField: 'FIRST_NAME',
            table: 'patients',
            field: 'firstname',

        },
    ])
    const columns = [
        { title: 'Merge Field', field: 'mergeField', headerSort: false },
        { title: 'Table', field: 'table', headerSort: false },
        { title: 'Field	', field: 'field', headerSort: false },

        /*{
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },*/
    ]
    return (
        <div className="tab-component">
            <div className="tab-component-header">
                <div className="header">
                    Merge Fields

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