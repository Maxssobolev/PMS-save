import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import { reactFormatter } from "react-tabulator";
import Actions from "../../Actions";
import CommonButton from '../../ButtonControllers/CommonButton';

export default function BodyChartImages(props) {


    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='inputFields/bodyChartImagesTab'
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            imageName: 'Body_chart_lineart1.jpg',
            actions: ''
        },
    ])
    const columns = [
        { title: 'Image Name', field: 'imageName', eaderSort: false, },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <div className="tab-component">
            <div className="tab-component-header">
                <div className="header">
                    Body Chart Images
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