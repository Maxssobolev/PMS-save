import React from 'react';

import { Formik, Field, Form } from 'formik'
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';


export default function DidNotAttendForm(props) {
    const reason = ["Select"]
    const closeModal = props.closeModal
    return (
        <div className="didNotAttendForm">
            <Formik
                initialValues={{
                    reason: '',
                    note: '',
                    reOpenTimeSlot: '',
                    useSession: ''
                }}

                onSubmit={(values) => {
                    /*fetch(pv.DIDNOT_ATTEND_FROM_API, {
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
                            <div className="flex">
                                <div className="field-wrapper">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_select"
                                        name="reason"
                                    >
                                        {reason.map((item, index) => <option value={item} key={`${index}__didNotAddApointment_reason`} >{item}</option>)}
                                    </Field>
                                    <span>Reason*:</span>
                                </div>
                            </div>
                            <div className="flex flex_50 form-row-mb form-row_note ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 field_textarea"
                                        component="textarea"
                                        name="note"
                                        placeholder="Notes" />
                                </div>
                            </div>
                            <div className="flex checkbox-wrapper">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="reOpenTimeSlot"
                                        className="checkbox"
                                    />
                                    <span>Re-Open time slot</span>
                                </label>
                            </div>
                            <div className="flex checkbox-wrapper">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="useSession"
                                        className="checkbox"
                                    />
                                    <span>Uses Session</span>
                                </label>
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