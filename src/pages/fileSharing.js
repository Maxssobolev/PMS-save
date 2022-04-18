import React from 'react'
import '../assets/scss/pages.scss'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import ShowFoldres from '../components/ToolsPage/FileSharingComponents/ShowFolders'
import CommonButton from '../components/ButtonControllers/CommonButton'
import OnSiteFiles from '../components/ToolsPage/FileSharingComponents/OnSiteFiles'
export default function FileSharingPage() {
    const tabs = [
        { title: 'Admin Folder', eventKey: 'AdminFolder', component: ShowFoldres },
        { title: 'Managers Folder', eventKey: 'ManagersFolder', component: ShowFoldres },
        { title: 'Practitioners Folder', eventKey: 'PractitionersFolder', component: ShowFoldres },
        { title: 'Social Prescribing', eventKey: 'SocialPrescribing', component: ShowFoldres },
        { title: 'FCP', eventKey: 'FCP', component: ShowFoldres },
    ]

    return (
        <div className="page page-fileSharing">
            <section className="header-section">
                <h1 className="page-header">File Sharing</h1>
            </section>

            <section>
                <Tab.Container defaultActiveKey="AdminFolder">
                    <Row>
                        <Col>
                            <Nav>
                                {tabs.map((item, index) => (
                                    <Nav.Item>
                                        <Nav.Link eventKey={item.eventKey} >
                                            <button className="tabNavigators">{item.title}</button>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tab.Content>
                                {tabs.map((item, index) => {
                                    const RenderComponent = item.component || null
                                    if (RenderComponent) {
                                        return (
                                            <Tab.Pane eventKey={item.eventKey} >
                                                <RenderComponent type={item.title} />
                                            </Tab.Pane>
                                        )
                                    }
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </section>

            <section>
                <div className="widget-block onSiteFiles">
                    <div className="top-wrapper">
                        <div className="block-header block-header_mediumSize" style={{ marginBottom: '0' }}>
                            On Site Files
                        </div>
                        <CommonButton text="Add new" customClass="button_accent" handler={() => { }} />
                    </div>
                    <div className="block-header block-header_darkblue">
                        Patient Documents
                    </div>
                    <OnSiteFiles />
                </div>


            </section>
        </div>
    );
}

