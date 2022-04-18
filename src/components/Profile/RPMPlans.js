import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../Actions';
import CommonButton from '../ButtonControllers/CommonButton';



export default function RPMPlans(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='RPMPlansTab'
            viewDetails
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            name: 'No name',
            created: '23-07-21 09:00',
            modified: '23-07-21 09:00',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Created', field: 'created' },
        { title: 'Modified', field: 'modified' },
        {
            title: 'Actions', field: 'actions', headerSort: false, width: 100,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    return (
        <div className="RPMPlansTab">
            <div className="widget-block">
                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="name " //??
                    />
                </div>
                <div className="btn-wrapper">
                    <CommonButton text="Create Exercise Plan" customClass="button_accent addNewEpisodeBtn" handler={() => { }} />
                </div>
            </div>
        </div>

    )
}