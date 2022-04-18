import React, { useState } from 'react'
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import '../../assets/scss/modal.scss'
import { reactFormatter } from 'react-tabulator'
import Actions from '../../components/Actions'
import TableWidthSearchAndPagination from '../../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination';
import { Link } from 'react-router-dom';

export default function ListAllContacts() {
    const [pageHeader, setPageHeader] = useState('Contacts List - Personal')

    //
    const handleDelete = (id, location, local) => {
        if (local == 'person') {
            //(db query).then()
            setInitialRowData_persons((prev) => prev.filter((itm) => itm.id != id))
        }
        if (local == 'company') {
            //(db query).then()
            setInitialRowData_companies((prev) => prev.filter((itm) => itm.id != id))
        }
    }


    function ActionsGroupPerson(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='person'
            //wich actions needs to be included:
            delete handlerDelete={handleDelete}
            editDetails
        />;
    }

    function ActionsGroupCompany(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            local='company'
            //wich actions needs to be included:
            delete handlerDelete={handleDelete}
            editDetails
        />;
    }


    //PERSONS
    const [initialRowData_persons, setInitialRowData_persons] = useState([
        {
            id: 'id',
            company: 'Wrythe Green Surgery',
            name: 'Alison',
            created: '23-07-21 09:00',
            actions: ''
        }
    ])
    const columns_perosns = [
        { title: 'Company', field: 'company', },
        { title: 'Name', field: 'name', },
        { title: 'Last Name', field: 'lastName', },
        { title: 'Type', field: 'type' },
        { title: 'Job Title', field: 'jobTitle', },
        { title: 'Address', field: 'address', },
        { title: 'Post Code', field: 'postCode', },
        { title: 'Phone', field: 'phone', },
        { title: "Email", field: 'email' },
        { title: 'Created', field: 'created' },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroupPerson />)
        },
    ]


    //COMPANIES
    const [initialRowData_companies, setInitialRowData_companies] = useState([
        {
            id: 'id',
            name: 'Wrythe Green Surgery',
            created: '23-07-21 09:00',
            actions: ''
        }
    ])
    const columns_companies = [
        { title: 'Name', field: 'name', },
        { title: 'Type', field: 'type' },
        { title: 'Address', field: 'address', },
        { title: 'City', field: 'city', },
        { title: 'Post Code', field: 'postCode', },
        { title: 'Phone', field: 'phone', },
        { title: "Email", field: 'email' },
        { title: 'Created', field: 'created' },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData()?.id }),
            formatter: reactFormatter(<ActionsGroupCompany />)
        },
    ]



    return (
        <div className="listAll">
            <section className="header-section">
                <h1 className="page-header">{pageHeader}</h1>
            </section>

            <section>
                <div className="widget-block">
                    <Tab.Container defaultActiveKey="PersonsContacts">
                        <Row>
                            <Col>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link eventKey="PersonsContacts">
                                            <button className="tabNavigators" onClick={() => {
                                                setPageHeader('Contacts List - Personal')
                                                //update initialRowData_personal
                                            }}>Persons Contacts</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="CompaniesContacts">
                                            <button className="tabNavigators" onClick={() => {
                                                setPageHeader('Contacts List - Companies')
                                                //update initialRowData_companies
                                            }}>Companies Contacts</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Link
                                        className="tabNavigators  tabNavigators_button"
                                        {
                                        ...(
                                            pageHeader == 'Contacts List - Personal' ?
                                                {
                                                    to: {
                                                        pathname: '/contacts/addNew',
                                                        myState: {
                                                            type: 'person'
                                                        }
                                                    }
                                                }
                                                :
                                                {
                                                    to: {
                                                        pathname: '/contacts/addNew',
                                                        myState: {
                                                            type: 'company'
                                                        }
                                                    }
                                                }
                                        )
                                        }
                                    >Add new patient</Link>

                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="PersonsContacts">
                                        <TableWidthSearchAndPagination

                                            initialRowData={initialRowData_persons}
                                            columns={columns_perosns}
                                            customSearchWrapperClass="_search"
                                            searchField="name"
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="CompaniesContacts">
                                        <TableWidthSearchAndPagination

                                            initialRowData={initialRowData_companies}
                                            columns={columns_companies}
                                            customSearchWrapperClass="_search"
                                            searchField="name"

                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </div>
    );
}

