import React, {useState} from 'react'
import { Modal, Tab, Row, Col, Nav } from 'react-bootstrap';
import '../../assets/scss/modal.scss'
import TableWidthSearchAndPagination from "../../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import {reactFormatter} from "react-tabulator";
import Actions from "../../components/Actions";
import EuroIcon from '../../assets/img/icons/euro.svg'
export default function UsersListTools() {


    return (
        <div className="usersList">
            <section className="header-section">
                <h1 className="page-header">Users</h1>
            </section>

            <Tab.Container defaultActiveKey="activeUsers">
                <Row className='tabsNav'>
                    <Col>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey="activeUsers">
                                    <button className="tabNavigators">Active Users</button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="inactiveUsers">
                                    <button className="tabNavigators">Inactive Users</button>
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="activeUsers">
                                <UsersListComponent serverParametrs={{
                                        GET: '/api/activeUsers'
                                    }}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="inactiveUsers">
                                <UsersListComponent serverParametrs={{
                                    GET: '/api/inactiveUsers'
                                }}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

function UsersListComponent(props){
    const {serverParametrs} = props

    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='usersList'
            //wich actions needs to be included:
            editDetails customHandlerEditDetails={() => {}}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            no: 52521,
            patient: 'Garry Walker',
            diaryUser: 'Tomas Garrson',
            appt: 1,
            date: 1,
            description: 1,
            total: 1,
            created: 1,
            lastModified: 1,
            actions: '',

        }
    ])
    const columns = [
        { title: 'No', field: 'no', width: 80, },
        { title: 'Patient', field: 'patient', },
        { title: 'Diary User', field: 'diaryUser', },
        { title: 'Appt', field: 'appt' },
        { title: 'Date', field: 'date', },
        { title: 'Description', field: 'description', },
        { title: `Total,<img src=${EuroIcon} style="width: 9px; margin-bottom: 3px;" />`, field: 'total', },
        { title: 'Created', field: 'created', },
        { title: "Last Modified", field: 'lastModified' },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    return (
        <div className="widget-block">
            <TableWidthSearchAndPagination
                initialRowData={initialRowData}
                columns={columns}
                customSearchWrapperClass='_search'
                searchField='patient'
            />
        </div>
    )
}
