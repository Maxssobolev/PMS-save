import React from 'react';
import { Formik, Form, Field } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';


export default function SetupInvoiceForm(props) {
    const closeModal = props.closeModal
    return (
        <div className="setupInvoiceForm">
            <Formik
                    initialValues={{
                        sms: false,
                        email: false,
                        howOften: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        /*fetch(pv.SETUP_INVOICE_API, {
                               method: 'POST',
                               body: JSON.stringify({login, password})
                           })
                           .then(data => data.json()).then((r)=> {
                               if (r == 'положительный ответ от сервера')
                                   loginSuccess()
                           })*/
                    }}
                >
                    {(props) => (
                        <Form>
                            <div className="flex">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="sms"
                                        className="checkbox"
                                    />
                                    <span>SMS</span>
                                </label>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="email"
                                        className="checkbox"
                                    />
                                    <span>Email</span>
                                </label>
                            </div>
                            <div className="flex">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100"
                                        component="input"
                                        name="howOften"
                                        type="number"
                                        min={0}
                                    />
                                    <span>How often</span>
                                </div>
                            </div>

                            <div className="btn-wrapper">
                                <SubmitButton text="Save" />
                            </div>
                        </Form>
                    )}


                </Formik>
        </div>
    )
}