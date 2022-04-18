import React from 'react';

import { Formik, Field, Form } from 'formik'
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';


export default function SendSMSForm(props) {
    const rowData = props.rowdata
    const patient = [rowData.practitioner, 'Other']
    const template = ["Select"]

    const closeModal = props.closeModal
    return (
        <div className="sendSMSForm ">
            <Formik
                initialValues={{
                    patient: rowData.practitioner,
                    mobileTel: '',
                    template: '',
                    notes: '',

                }}

                onSubmit={(values) => {
                    /*fetch(pv.SEND_SMS_FORM_API, {
                        method: 'POST',
                        body: JSON.stringify({login, password})
                    })
                    .then(data => data.json()).then((r)=> {
                        if (r == 'положительный ответ от сервера')
                            loginSuccess()
                    })*/
                }}
            >
                {
                    (props) => (
                        <Form>
                            <div className="flex ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_select field_100"
                                        name="patient"
                                    >
                                        {patient.map((item, index) => <option value={item} key={`${index}__sendSMS_patient`} >{item}</option>)}
                                    </Field>
                                    <span>Patient*:</span>
                                </div>
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100"
                                        component="input"
                                        type="tel"
                                        name="mobileTel" />
                                    <span>Mobile Tel:</span>
                                </div>

                            </div>
                            <div className="flex flex_50 ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        component="select"
                                        className="field field_100 field_select"
                                        name="template"
                                    >
                                        {template.map((item, index) => <option value={item} key={`${index}__sendSMS_template`} >{item}</option>)}
                                    </Field>
                                    <span>Template:</span>
                                </div>
                            </div>
                            <div className="flex flex_50  form-row_note" >
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 field_textarea"
                                        component="textarea"
                                        name="notes"
                                        placeholder="Notes" />
                                </div>
                            </div>

                            <div className="btn-wrapper">
                                <SubmitButton text="Save" />
                                <CancelButton handler={closeModal} />
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}