import React, { useState } from 'react'
import '../assets/scss/pages.scss'
import Actions from '../components/Actions';
import { reactFormatter } from 'react-tabulator';
import TableWidthSearchAndPagination from '../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination';

export default function StaffInfoPage() {

    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            viewDetails customHandlerViewDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }


    const [initialRowData, setInitialRowData] = useState([
        {
            id: '1',
            firstName: 'Test',
            lastName: 'Practitioner',
            middleName: 'Manuel',
            prefferedName: '',
            dob: '1980-08-24',
            created: '',
            lastModified: '2020-07-31 15:05:15',
            actions: ''
        },
    ])
    const columns = [
        { title: 'First Name', field: 'firstName', headerSort: false },
        { title: 'Last Name', field: 'lastName', headerSort: false },
        { title: 'Middle Name', field: 'middleName', headerSort: false },
        { title: 'Preffered Name', field: 'prefferedName', headerSort: false },
        { title: 'DOB', field: 'dob', headerSort: false },
        { title: 'Created', field: 'created', headerSort: false },
        { title: 'Last Modified', field: 'lastModified', headerSort: false },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]

    return (
        <div className="page page-staffInfo">
            <section className="header-section">
                <h1 className="page-header">Staff Info</h1>
            </section>

            <div className="widget-block">
                <TableWidthSearchAndPagination
                    showEntries={false}
                    initialRowData={initialRowData}
                    columns={columns}
                    customSearchWrapperClass="_search"
                />
            </div>
        </div>
    );
}

