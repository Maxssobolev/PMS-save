import React from 'react'
import { Tab, Nav } from 'react-bootstrap'
import AppointmentsTypes from '../../components/ToolsPage/InputFieldsComponents/AppointmentsTypes';
import BlockReasons from '../../components/ToolsPage/InputFieldsComponents/BlockReasons';
import BankAccounts from '../../components/ToolsPage/InputFieldsComponents/BankAccounts';
import BodyChartImages from '../../components/ToolsPage/InputFieldsComponents/BodyChartImages';
import BodyPatrs from '../../components/ToolsPage/InputFieldsComponents/BodyParts';
import ChargeDescriptions from '../../components/ToolsPage/InputFieldsComponents/ChargeDescriptions';
import CompanyTypes from '../../components/ToolsPage/InputFieldsComponents/CompanyTypes';
import ConsultationNotes from '../../components/ToolsPage/InputFieldsComponents/ConsultationNotes';
import DiarySetupDescriptions from '../../components/ToolsPage/InputFieldsComponents/DiarySetupDescriptions';
import DischargeOutcomes from '../../components/ToolsPage/InputFieldsComponents/DischargeOutcomes';
import Disciplines from '../../components/ToolsPage/InputFieldsComponents/Disciplines';
import DNAReasons from '../../components/ToolsPage/InputFieldsComponents/DNAReasons';
import EventTypes from '../../components/ToolsPage/InputFieldsComponents/EventTypes';
import FileCategories from '../../components/ToolsPage/InputFieldsComponents/FileCategories';
import Locations from '../../components/ToolsPage/InputFieldsComponents/Locations';
import MergeFields from '../../components/ToolsPage/InputFieldsComponents/MergeFields';
import PatientGroups from '../../components/ToolsPage/InputFieldsComponents/PatientGroups';
import PatientIntroductions from '../../components/ToolsPage/InputFieldsComponents/PatientIntroductions';
import PatientOccupations from '../../components/ToolsPage/InputFieldsComponents/PatientOccupations';
import PaymentTypes from '../../components/ToolsPage/InputFieldsComponents/PaymentTypes';
import Titles from '../../components/ToolsPage/InputFieldsComponents/Titles';
import WorkingDiagnoses from '../../components/ToolsPage/InputFieldsComponents/WorkingDiagnoses';
import TreatmentTypes from '../../components/ToolsPage/InputFieldsComponents/TreatmentTypes';

export default function InputFieldsTools() {
    const tabs = [
        { title: 'Appointments Types', eventKey: 'AppointmentsTypes', component: AppointmentsTypes },
        { title: 'Event Types', eventKey: 'EventTypes', component: EventTypes },
        { title: 'BlockReasons', eventKey: 'BlockReasons', component: BlockReasons },
        { title: 'File Categories', eventKey: 'File Categories', component: FileCategories },
        { title: 'Bank Account for Billing', eventKey: 'BankAccountforBilling', component: BankAccounts },
        { title: 'Locations', eventKey: 'Locations', component: Locations },
        { title: 'Body Chart Images', eventKey: 'BodyChartImages', component: BodyChartImages },
        { title: 'Merge Fields', eventKey: 'MergeFields', component: MergeFields },
        { title: 'Body Parts', eventKey: 'BodyParts', component: BodyPatrs },
        { title: 'Patient Groups', eventKey: 'PatientGroups', component: PatientGroups },
        { title: 'Charge Descriptions', eventKey: 'ChargeDescriptions', component: ChargeDescriptions },
        { title: 'Patient Introductions', eventKey: 'PatientIntroductions', component: PatientIntroductions },
        { title: 'Company Types', eventKey: 'CompanyTypes', component: CompanyTypes },
        { title: 'Patient Occupations', eventKey: 'PatientOccupations', component: PatientOccupations },
        { title: 'Consultation Notes', eventKey: 'ConsultationNotes', component: ConsultationNotes },
        { title: 'Payment Types', eventKey: 'PaymentTypes', component: PaymentTypes },
        { title: 'Diary Setup Descriptions', eventKey: 'DiarySetupDescriptions', component: DiarySetupDescriptions },
        { title: 'Titles', eventKey: 'Titles', component: Titles },
        { title: 'Discharge Outcomes', eventKey: 'DischargeOutcomes', component: DischargeOutcomes },
        { title: 'Working Diagnoses', eventKey: 'WorkingDiagnoses', component: WorkingDiagnoses },
        { title: 'Disciplines', eventKey: 'Disciplines', component: Disciplines },
        { title: 'Treatment Types', eventKey: 'TreatmentTypes', component: TreatmentTypes },
        { title: 'DNA Reasons', eventKey: 'DNAReasons', component: DNAReasons },
        { title: '', eventKey: '' },
    ]

    return (
        <div className="inputFields">
            <section className="header-section">
                <h1 className="page-header">Manage Input Fields</h1>
            </section>
            <section className='wrapper-area'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="AppointmentsTypes">
                    <div className="leftSideArea">
                        <div className="widget-block">
                            <div className="message">
                                Warning! Be advised, that the deletion of anything that has been there for a while, and has assigned to it records already, can lead to the consequences
                            </div>

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

