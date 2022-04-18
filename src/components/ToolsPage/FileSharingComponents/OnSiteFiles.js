import React, { useState } from 'react';
import { handleDownload } from '../../CommonUtils/CommonUtils';
import Actions from '../../Actions';
import { reactFormatter } from 'react-tabulator';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { ReactComponent as DownloadIcon } from '../../../assets/img/icons/download.svg'
import { pv } from '../../../projectVars';
export default function OnSiteFiles(props) {
    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData_chargeList((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;


    }
    function Download(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <DownloadIcon style={{ margin: '0 auto', display: 'block' }} width={18} height={18} onClick={() => handleDownload(cellData.download, pv.DOCUMENTS_PATH)} />


    }
    const [initialRowData_chargeList, setInitialRowData_chargeList] = useState([
        {
            id: '1',
            no: '90392',
            heading: 'Initial Assessment',
            nameLink: 'letter-1627398097.pdf',
            notes: 'Letter file	',
            addedBy: 'Lilla Gyuris	',
            dateAdded: '27-07-2021 16:00',
            download: 'letter-1627398097.pdf',
            fileLink: '/',
            actions: ''
        },
    ])
    const columns = [
        { title: 'No', field: 'no', width: 80 },
        {
            title: 'Heading', field: 'heading', formatter: function (cell, formatterParams, onRendered) {
                //open File
                const rowInfo = cell._cell.row.data
                return "<a href='" + rowInfo.fileLink + "' target='_blank'>" + rowInfo.heading + "</a>"
            }
        },
        {
            title: 'Name/Link', field: 'nameLink', formatter: function (cell, formatterParams, onRendered) {
                //open File
                const rowInfo = cell._cell.row.data
                return "<a href='" + rowInfo.fileLink + "' target='_blank'>" + rowInfo.nameLink + "</a>"
            }
        },
        { title: 'Notes', field: 'notes', },
        { title: 'Added By', field: 'addedBy', },
        { title: 'Date Added', field: 'dateAdded', },
        {
            title: `Download`, field: 'download', headerSort: false, width: 80,
            formatter: reactFormatter(<Download />)
        },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <TableWidthSearchAndPagination
            initialRowData={initialRowData_chargeList}
            columns={columns}
            customSearchWrapperClass="_search"
            searchField="heading" //?
            searchPlaceholder="Search documents"
        />
    )
}