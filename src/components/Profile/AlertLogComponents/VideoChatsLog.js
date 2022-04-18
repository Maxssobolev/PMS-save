import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { reactFormatter } from 'react-tabulator';
import Actions from '../../Actions';

export default function VideoChatsLog(props) {

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='alertLogTab/videoChatLog'
        //???

        />;
    }
    const [initialRowData, setInitialRowData] = useState([])
    const columns = [
        { title: 'User', field: 'user' },
        { title: 'Room Name', field: 'roomName' },
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
                    Video Chats Log
                </div>


                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        customSearchWrapperClass="_search"
                        searchField="user" //??
                    />
                </div>
            </div>
        </div>

    )
}