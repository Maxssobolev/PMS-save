import React, { forwardRef, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import SubmitButton from "../../components/ButtonControllers/SubmitButton";
import { ReactComponent as PaginateIcon } from "../../assets/img/icons/right-arrow-paginate.svg"
import { datePickerCustomHeaderRender, DatePickerField } from "../../components/CommonUtils/CommonUtils";

const steps = ['Type of Report', 'Filters'];
function _renderStepContent(step) {
    switch (step) {
        case 0:
            return <TypeOfReportStep stepHeader={steps[step]} />;
        case 1:
            return <FiltersStep stepHeader={steps[step]} />;
        default:
            return <div>Not Found</div>;
    }
}

export default function CreateNewReports() {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    function _handleNext() {
        setActiveStep(activeStep + 1);
    }

    return (
        <div className="createNew">
            <section className="header-section">
                <h1 className="page-header">Report Wizard</h1>
            </section>
            <section>
                <div className="widget-block">
                    <div className="message">
                        Warning! PPS data is not entirely compatible with PMS, so the data imported from PPS is not 100% accurate.
                        It is better to create a report from the date of PMS launch.
                    </div>
                    <Formik
                        initialValues={{
                            typeOfReport: false,
                            dateFrom: '',
                            dateTo: '',
                            recentPractitioner: '',
                            bodyPart: '',
                            nhsccg: '',
                            patientGroup: '',
                            debtorsOnly: false,
                            excludeDNAAppointments: false,
                            csv: false,
                            xls: false,
                            pdf: false

                        }}

                        onSubmit={(values) => {
                            //console.log(values);
                        }}
                    >
                        {(props) => (
                            <Form>
                                {_renderStepContent(activeStep)}

                                <div className="btn-wrapper">
                                    {activeStep !== 0 && (
                                        <button onClick={_handleBack} className="step-button step-button_back">
                                            Previous
                                            <span className="_svg"><PaginateIcon style={{ transform: 'rotate(180deg)' }} /></span>
                                        </button>
                                    )}
                                    {activeStep == 0 && (
                                        <button onClick={_handleNext} className="step-button step-button_next">
                                            Next
                                            <span className="_svg"><PaginateIcon /></span>
                                        </button>

                                    )}
                                    {isLastStep && (
                                        <SubmitButton text="Create" />
                                    )}
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </div>
    );
}

function TypeOfReportStep(props) {
    const header = props.stepHeader
    return (
        <div className="step">
            <div className="stepHeader">{header}:</div>
            <div className="formStep-content">
                <label><Field type="radio" name="typeOfReport" value="one" /> Report on patients (pdf/csv/xsl)</label>
                <label><Field type="radio" name="typeOfReport" value="two" /> Report on Practitioners (csv/xls)</label>
                <label><Field type="radio" name="typeOfReport" value="three" /> Report on patients (pdf/csv/xsl)</label>
                <label><Field type="radio" name="typeOfReport" value="four" /> Report on patients (pdf/csv/xsl)</label>
                <label><Field type="radio" name="typeOfReport" value="five" /> Report on patients (pdf/csv/xsl)</label>
                <label><Field type="radio" name="typeOfReport" value="six" /> Report on patients (pdf/csv/xsl)</label>
                <label><Field type="radio" name="typeOfReport" value="seven" /> Report on patients (pdf/csv/xsl)</label>
            </div>
        </div>
    )
}


function FiltersStep(props) {
    const header = props.stepHeader
    const coveragePercent = ["Select"]
    const bodyPart = ["Select"]
    const nhsccg = ["Select"]
    const insuranceCompany = ["Select"]
    const patientGroup = ["Select"]
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker field_100 ${addclass}`} onClick={onClick} ref={ref} defaultValue={value || ''} />
    ));
    return (
        <div className="step">
            <div className="stepHeader">{header}:</div>
            <div className="formStep-content" style={{ marginTop: '30px' }}>
                <div className="flex">
                    <div className="field-wrapper">
                        <DatePickerField
                            name="dateFrom"
                            renderCustomHeader={datePickerCustomHeaderRender}
                            customInput={<CustomDatePickerField />}
                            dateFormat="dd.MM.yyyy"
                        />
                        <span>Date from (dd-mm-yyyy):</span>
                    </div>
                    <div className="field-wrapper">
                        <DatePickerField
                            name="dateTo"
                            renderCustomHeader={datePickerCustomHeaderRender}
                            customInput={<CustomDatePickerField />}
                            dateFormat="dd.MM.yyyy"
                        />
                        <span>Date to (dd-mm-yyyy):</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="field-wrapper">
                        <Field
                            className="field field_select"
                            component="select"
                            name="recentPractitioner">
                            {coveragePercent.map((item, index) => <option value={item} key={`${index}__report_recentPractitioner`} >{item}</option>)}
                        </Field>
                        <span>Recent practitioner:</span>
                    </div>
                    <div className="field-wrapper">
                        <Field
                            className="field field_select"
                            component="select"
                            name="bodyPart">
                            {bodyPart.map((item, index) => <option value={item} key={`${index}__report_bodyPart`} >{item}</option>)}
                        </Field>
                        <span>Body part:</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="field-wrapper">
                        <Field
                            className="field field_select"
                            component="select"
                            name="nhsccg">
                            {nhsccg.map((item, index) => <option value={item} key={`${index}__report_NHSCCG`} >{item}</option>)}
                        </Field>
                        <span>NHS CCG:</span>
                    </div>
                    <div className="field-wrapper">
                        <Field
                            className="field field_select"
                            component="select"
                            name="insuranceCompany">
                            {insuranceCompany.map((item, index) => <option value={item} key={`${index}__report_insuranceCompany`} >{item}</option>)}
                        </Field>
                        <span>Insurance company:</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="field-wrapper">
                        <Field
                            className="field field_select"
                            component="select"
                            name="patientGroup">
                            {patientGroup.map((item, index) => <option value={item} key={`${index}__report_patientGroup`} >{item}</option>)}
                        </Field>
                        <span>Patient Group:</span>
                    </div>
                </div>

                <div className="flex checkbox-row">
                    <label>
                        <Field
                            type="checkbox"
                            name="debtorsOnly"
                            className="checkbox"
                        />
                        <span>Debtors only</span>
                    </label>
                </div>
                <div className="flex checkbox-row">
                    <label>
                        <Field
                            type="checkbox"
                            name="excludeDNAAppointments"
                            className="checkbox"
                        />
                        <span>Exclude DNA Appointments</span>
                    </label>
                </div>
                <div className="flex checkbox-row">
                    <label>
                        <Field
                            type="checkbox"
                            name="csv"
                            className="checkbox"
                        />
                        <span>CSV</span>
                    </label>
                </div>
                <div className="flex checkbox-row">
                    <label>
                        <Field
                            type="checkbox"
                            name="xls"
                            className="checkbox"
                        />
                        <span>XLS</span>
                    </label>
                </div>
                <div className="flex checkbox-row">
                    <label>
                        <Field
                            type="checkbox"
                            name="pdf"
                            className="checkbox"
                        />
                        <span>PDF</span>
                    </label>
                </div>
            </div>
        </div>
    )
}