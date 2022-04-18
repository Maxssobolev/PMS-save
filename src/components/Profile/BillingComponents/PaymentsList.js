import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';
import EuroIcon from "../../../assets/img/icons/euro.svg";



export default function PaymentsList(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='billing/paymentsList'
            editDetails
            delete handlerDelete={handleDelete}

        />;
    }
    const [initialRowData, setInitialRowData] = useState([

        {
            id: 1,
            actions: ''
        },

    ])
    const columns = [
        {title: 'No.', field: 'no', width: 60},
        {title: 'Type', field: 'type'},
        {title: 'Date', field: 'date'},
        {title: `Total,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;"} />`, field: 'total'},
        {title: 'Part Paid', field: 'appt'},
        {title: 'Created', field: 'created'},
        {title: 'Last Modified', field: 'lastModified'},
        {title: 'Added By', field: 'addedBy'},
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
        <div className="chargesList">
            <div className="widget-block">
                <div className="block-header block-header_mediumSize">
                    Payments List
                </div>
                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="" //??
                    />
                </div>
            </div>
        </div>

    )
}