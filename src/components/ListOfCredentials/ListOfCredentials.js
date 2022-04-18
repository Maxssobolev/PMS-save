import React, { useState } from 'react';
import TableWidthSearchAndPagination from '../TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import Actions from '../Actions';
import { reactFormatter } from 'react-tabulator';
import CommonButton from '../ButtonControllers/CommonButton';
import { Modal } from 'react-bootstrap'




export default function ListOfCredentials(props) {

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    const handlerEditDetails = props.handlerEditDetails
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;


        return <Actions
            id={id}
            local='listOfCredentials'
            editDetails customHandlerEditDetails={handlerEditDetails} customHandlerEditDetailsArgs={[cellData]}
            delete handlerDelete={handleDelete}

        />;
    }

    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            site: 'Site',
            url: 'url'
        }
    ])
    const columns = [
        { title: 'Site', field: 'site' },
        { title: 'Url', field: 'url', formatter: 'link', widthGrow: 2 },
        { title: 'Login', field: 'login', headerSort: false },
        { title: 'Password', field: 'password', headerSort: false },
        {
            title: 'Actions', field: 'actions', headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },

    ]

    return (
        <>
            <div className="listOfCredentials">
                <div className="block-header">
                    List of credentials
                </div>

                <div className="btn-wrapper">
                    <CommonButton customClass='button_accent' text="Add New" handler={() => {
                        props.handlerCreateNewRow()
                    }} />
                </div>

                <div className="_table">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        searchField="site"
                        customSearchWrapperClass="_search"
                    />
                </div>
            </div>
        </>
    )
}