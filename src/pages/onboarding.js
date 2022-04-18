import React, { forwardRef, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import SubmitButton from "../components/ButtonControllers/SubmitButton";
import '../assets/scss/pages.scss'
import { ReactComponent as PaginateIcon } from '../assets/img/icons/right-arrow-paginate.svg'

//form steps components
import PersonalDetails from '../components/Forms/SurreyPhysioNewStarterForm/PersonalDetails';
import EmergencyContactDetails from '../components/Forms/SurreyPhysioNewStarterForm/EmergencyContactDetails';
import NationalInsurance from '../components/Forms/SurreyPhysioNewStarterForm/NationalInsurance';
import BankDetails from '../components/Forms/SurreyPhysioNewStarterForm/BankDetails';
import HealthQuestions from '../components/Forms/SurreyPhysioNewStarterForm/HealthQuestions';
import CVUpload from '../components/Forms/SurreyPhysioNewStarterForm/CVUpload';
import SignedContract from '../components/Forms/SurreyPhysioNewStarterForm/SignedContract';
import P45 from '../components/Forms/SurreyPhysioNewStarterForm/P45';
import Passport from '../components/Forms/SurreyPhysioNewStarterForm/Passport';
import DrivingLicence from '../components/Forms/SurreyPhysioNewStarterForm/DrivingLicence';
import BirthCertificate from '../components/Forms/SurreyPhysioNewStarterForm/BirthCertificate';
import Visa from '../components/Forms/SurreyPhysioNewStarterForm/Visa';
import DBSCertificate from '../components/Forms/SurreyPhysioNewStarterForm/DBSCertificate';
import CSPIndemnityInsurance from '../components/Forms/SurreyPhysioNewStarterForm/CSPIndemnityInsurance';
import OathOfConfidentiality from '../components/Forms/SurreyPhysioNewStarterForm/OathOfConfidentiality';
import References from '../components/Forms/SurreyPhysioNewStarterForm/References';
import Finish from '../components/Forms/SurreyPhysioNewStarterForm/Finish';
const steps = [
    { title: 'Personal Details', component: PersonalDetails },
    { title: 'Emergency Contact Details', component: EmergencyContactDetails },
    { title: 'National Insurance', component: NationalInsurance },
    { title: 'Bank Details', component: BankDetails },
    { title: 'Health Questions', component: HealthQuestions },
    { title: 'CV Upload', component: CVUpload },
    { title: 'Signed Contract', component: SignedContract },
    { title: 'P45', component: P45 },
    { title: 'Passport', component: Passport },
    { title: 'Driving Licence', component: DrivingLicence },
    { title: 'Birth Certificate', component: BirthCertificate },
    { title: 'Visa', component: Visa },
    { title: 'DBS Certificate', component: DBSCertificate },
    { title: 'CSP Indemnity Insurance', component: CSPIndemnityInsurance },
    { title: 'Oath of Confidentiality', component: OathOfConfidentiality },
    { title: 'References', component: References },
    { title: 'Finish', component: Finish },


];
function _renderStepContent(step, props) {
    const RenderComponent = steps[step].component
    return (
        <RenderComponent formProps={props} />
    )
}

export default function OnboardingPage() {

    const [activeStep, setActiveStep] = useState(0);
    const [historySteps, setHistorySteps] = useState([])
    const isLastStep = activeStep === steps.length - 2; //to show success page
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    function _handleNext() {
        setActiveStep(activeStep + 1);
        setHistorySteps(prev => [...prev, activeStep, activeStep + 1])
        console.log(activeStep)
    }


    return (
        <div className="page page-onboarding">
            <section className="header-section">
                <h1 className="page-header">Surrey Physio New Starter Form: {steps[activeStep].title}</h1>
            </section>
            <div className="widget-block">
                <div className="steps-graph">
                    <div className="line">
                        {
                            Array.from({ length: 8 }, (_, i) => i + 1).map(
                                (itm, idx) => {
                                    return (
                                        <div className="stepCircle"
                                            key={`${idx}__circleStep`}
                                            {...(historySteps.includes(itm - 1) ?
                                                {
                                                    onClick: () => setActiveStep(itm - 1),
                                                    mayToClick: 'yes'
                                                }
                                                :
                                                null
                                            )}
                                            {...(itm - 1 == activeStep ?
                                                {
                                                    activeCircle: 'yes'
                                                }
                                                :
                                                null
                                            )}
                                        >
                                            {itm}
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                    <div className="line line_2">
                        {
                            Array.from({ length: 8 }, (_, i) => i + 9).map(
                                (itm, idx) => {
                                    return (
                                        <div className="stepCircle"
                                            key={`${idx}__circleStepLine2`}
                                            {...(historySteps.includes(itm - 1) ?
                                                {
                                                    onClick: () => setActiveStep(itm - 1),
                                                    mayToClick: 'yes'
                                                }
                                                :
                                                null
                                            )}
                                            {...(itm - 1 == activeStep ?
                                                {
                                                    activeCircle: 'yes'
                                                }
                                                :
                                                null
                                            )}
                                        >
                                            {itm}
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <Formik
                    initialValues={{

                        //personal Details
                        pd_firstName: '',
                        pd_middleName: '',
                        pd_lastName: '',
                        pd_preferredName: '',
                        pd_dob: '',
                        pd_address1: '',
                        pd_address2: '',
                        pd_country: '',
                        pd_city: '',
                        pd_preBooked: '',
                        pd_postcode: '',
                        pd_otherTel: '',
                        pd_mobileTel: '',
                        pd_hcpcRegNumber: '',
                        pd_cspRegNumber: '',
                        pd_dbsNumber: '',
                        pd_shirtSize: '',
                        pd_email: '',
                        //--------------

                        //emergencyContactDetails
                        ecd_name: '',
                        ecd_mobileTel: '',

                        //NationalInsurance
                        ni_haveNINumber: 'no',
                        ni_NINumber: '',

                        //BankDetails
                        bd_bankName: '',
                        bd_bankBranch: '',
                        bd_bankBranchAddress: '',
                        bd_bankAccountSortCode: '',
                        bd_bankAccountNumber: '',

                        //HealthQuestions
                        hq_hearingDisability: '',
                        hq_eyeDisability: '',
                        hq_seizureConditions: '',
                        hq_diabetes: '',
                        hq_otherHealthIssues: '',
                        hq_note: '',

                        //CV Upload
                        cv_attachment: [],
                        cv_details: '',
                        cv_experience: '',

                        //SignedContract
                        sc_attachment: [],
                        sc_details: '',

                        //P45
                        p45_details: '',
                        p45_attachment: [],

                        //Pasport
                        passport_details: '',
                        passport_attachments: [],

                        //Driving License
                        dl_details: '',
                        dl_attachments: [],

                        //Birth Certificate
                        bc_details: '',
                        bc_attachments: [],

                        //Visa
                        visa_statusNumber: '',
                        visa_details: '',
                        visa_attachments: [],

                        //DBSCertificate
                        dbs_details: '',
                        dbs_attachments: [],

                        //CSP Indemnity Insurance
                        csp_details: '',
                        csp_attachments: [],

                        //OathOfConfidentiality
                        oath_attachments: [],

                        //references
                        ref_attachment1: [],
                        ref_attachment2: []






                    }}

                    onSubmit={(values) => {
                        setActiveStep(16)
                    }}

                >
                    {(props) => (
                        <Form>
                            {_renderStepContent(activeStep, props)}
                            <div className="btn-wrapper">
                                {(activeStep !== 0) && (activeStep !== 16) && (
                                    <button onClick={_handleBack} className="step-button step-button_back" type="button">
                                        <span className="_svg"><PaginateIcon style={{ transform: 'rotate(180deg)' }} /></span>
                                    </button>
                                )}
                                {activeStep < steps.length - 2 && (
                                    <button onClick={_handleNext} className="step-button step-button_next" type="button">
                                        <span className="_svg"><PaginateIcon /></span>
                                    </button>

                                )}
                                {isLastStep && (
                                    <SubmitButton text="Save" />
                                )}
                            </div>
                        </Form>
                    )
                    }
                </Formik>
            </div>
        </div>
    );
}

