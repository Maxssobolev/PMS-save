import React from 'react'
import { Tab, Nav } from 'react-bootstrap'
import EmailTemplates from '../../components/ToolsPage/TemplatesComponents/EmailTemplates';
import InvoiceTemplates from '../../components/ToolsPage/TemplatesComponents/InvoiceTemplates';
import LetterTemplates from '../../components/ToolsPage/TemplatesComponents/LetterTemplates';
import SMSTemplates from '../../components/ToolsPage/TemplatesComponents/SMSTemplates';
export default function TemplatesTools() {
    const tabs = [
        { title: 'Email Templates', eventKey: 'EmailTemplates', component: EmailTemplates },
        { title: 'Invoice Templates', eventKey: 'InvoiceTemplates', component: InvoiceTemplates },
        { title: 'Letter Templates', eventKey: 'LetterTemplates', component: LetterTemplates },
        { title: 'SMS Templates', eventKey: 'SMSTemplates', component: SMSTemplates },
    ]
    return (
        <div className="inputFields">
            <section className="header-section">
                <h1 className="page-header">Manage Templates</h1>
            </section>
            <section className='wrapper-area'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="EmailTemplates">
                    <div className="leftSideArea">
                        <div className="widget-block">
                            <div className="message">
                                Warning! Be advised, that the deletion of anything that has been there for a while, and has assigned to it records already, can lead to the consequences                            </div>

                            <div className="tab-links">
                                <Nav>
                                    {tabs.map((item, index) => (
                                        <div className="_item" key={`${index}__tab_links-inputField`}>
                                            <Nav.Item>
                                                <Nav.Link eventKey={item.eventKey}>{item.title}</Nav.Link>
                                            </Nav.Item>
                                        </div>
                                    ))}
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideArea">
                        <div className="widget-block">
                            <Tab.Content>
                                {tabs.map((item, index) => {
                                    const RenderComponent = item.component || null
                                    if (RenderComponent) {
                                        return (
                                            <Tab.Pane eventKey={item.eventKey}>
                                                <RenderComponent />
                                            </Tab.Pane>
                                        )
                                    }
                                })}

                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </section>
        </div>
    );
}

