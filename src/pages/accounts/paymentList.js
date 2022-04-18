import React, { useState } from 'react'
import TableWidthSearchAndPagination from '../../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import Actions from '../../components/Actions';
import { reactFormatter } from 'react-tabulator';
import { Redirect } from 'react-router';
import EuroIcon from '../../assets/img/icons/euro.svg'
export default function PaymentListAccounts() {
    const [redirect, setRedirect] = useState({ allow: false })
    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
    }

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            //wich actions needs to be included:
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: '1',
            no: '',
            patient: 'Loras',
            diaryUser: 'Glen Wilkson',
            date: '2002/10/10',
            description: 'BBBB',
            total: '',
            created: '',
            lastModified: '',
            actions: '',
            appt: ''

        },
    ])
    const columns = [
        { title: 'No', field: 'no', width: 60 },
        {
            title: 'Patient', field: 'patient', cellClick: function (e, cell) {
                //simpliest way to locate to profile page
                const rowInfo = cell._cell.row.data
                setRedirect({ allow: true, id: rowInfo.id })
            }
        },
        { title: 'Type', field: 'type', width: 70 },
        { title: 'Date', field: 'date', width: 100 },
        { title: `Total, <img style="margin-bottom:0.3em;" src=${EuroIcon}>`, field: 'total', width: 70 },
        { title: 'Part Paid', field: 'partPaid' },
        { title: 'Created', field: 'created' },
        { title: 'Last Modified', field: 'lastModified' },
        { title: 'Added By', field: 'addedBy' },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    if (redirect.allow) {
        return <Redirect to={{
            pathname: '/accounts/profile',
            state: {
                id: redirect?.id
            }
        }} />
    } else {
        return (
            <div className="paymentList">
                <section className="header-section">
                    <h1 className="page-header">Payments List</h1>
                </section>

                <div className="widget-block">
                    <TableWidthSearchAndPagination
                        initialRowData={initialRowData}
                        columns={columns}
                        searchField="patient"
                        customSearchWrapperClass="_search"

                    />
                </div>
            </div>
        );
    }
}

