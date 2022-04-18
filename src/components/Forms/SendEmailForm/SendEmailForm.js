import React from 'react';

import { Formik, Field, Form } from 'formik'
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';
import UploadComponent from '../UploadComponent/UploadComponent';


export default function SendEmailForm(props) {
    const emailCC = ["None"]
    const thirdPartyRecipient = ["None"]
    const searchForThirdParty = ["Select"]
    const from = ["info@email.com"]
    const template = ["Select"]

    const closeModal = props.closeModal
    return (
        <div className="SendEmailForm ">
            <Formik
                initialValues={{
                    email: '',
                    thirdPartyRecipient: '',
                    from: '',
                    template: '',
                    emailСС: 'None',
                    searchForThirdParty: '',
                    subject: '',
                    message: '',
                    pmsFile: [],
                    uploadFile: [],
                    invoiceFile: []
                }}

                onSubmit={(values) => {
                    /*fetch(pv.SEND_EMAIL_FORM_API, {
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
                            <div className="flex flex_50 ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 "
                                        component="input"
                                        name="email" />
                                    <span>E-mail:</span>
                                </div>
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_100 field_select"
                                        name="emailCC"
                                    >
                                        {emailCC.map((item, index) => <option value={item} key={`${index}__sendEmail_emailCC`} >{item}</option>)}
                                    </Field>
                                    <span>E-mail CC:</span>
                                </div>
                            </div>
                            <div className="flex flex_50 ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_100 field_select"
                                        name="thirdPartyRecipient"
                                    >
                                        {thirdPartyRecipient.map((item, index) => <option value={item} key={`${index}__sendEmail_thirdPartyRecipient`} >{item}</option>)}
                                    </Field>
                                    <span>Third Party Recipient:</span>
                                </div>
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_100 field_select"
                                        name="searchForThirdParty"
                                    >
                                        {searchForThirdParty.map((item, index) => <option value={item} key={`${index}__sendEmail_searchForThirdParty`} >{item}</option>)}
                                    </Field>
                                    <span>Search For Third Party:</span>
                                </div>

                            </div>
                            <div className="flex flex_50 ">

                                <div className="field-wrapper flex-grow">
                                    <Field
                                        required
                                        component="select"
                                        className="field field_100 field_select"
                                        name="from"
                                    >
                                        {from.map((item, index) => <option value={item} key={`${index}__sendEmail_from`} >{item}</option>)}
                                    </Field>
                                    <span>From:</span>
                                </div>
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 "
                                        component="input"
                                        name="subject:" />
                                    <span>Subject:</span>
                                </div>
                            </div>
                            <div className="flex flex_50 ">

                                <div className="field-wrapper flex-grow" style={{ marginRight: '51%' }}>
                                    <Field
                                        required
                                        component="select"
                                        className="field field_100 field_select"
                                        name="template"
                                    >
                                        {template.map((item, index) => <option value={item} key={`${index}__sendEmail_template`} >{item}</option>)}
                                    </Field>
                                    <span>Template:</span>
                                </div>
                            </div>
                            <div className="flex flex_50  form-row_note " >
                                <div className="field-wrapper flex-grow" style={{ width: '100%', maxWidth: '100%' }}>
                                    <Field
                                        className="field field_100 field_textarea"
                                        component="textarea"
                                        name="message"
                                        placeholder="Message" />
                                </div>
                            </div>
                            <div className="flex upload-files-wrapper">
                                <div className="field-wrapper">
                                    <UploadComponent
                                        className="field field_dropzone"
                                        setFieldValue={props.setFieldValue}
                                        field="pmsFile"
                                        accept="image/*"
                                    />
                                    <span>
                                        PMS file:
                                    </span>
                                </div>
                                <div className="field-wrapper">
                                    <UploadComponent
                                        className="field field_dropzone"
                                        setFieldValue={props.setFieldValue}
                                        field="uploadFile"
                                        accept="image/*"
                                    />
                                    <span>
                                        Upload file:
                                    </span>
                                </div>
                                <div className="field-wrapper">
                                    <UploadComponent
                                        className="field field_dropzone"
                                        setFieldValue={props.setFieldValue}
                                        field="invoiceFile"
                                        accept="image/*"
                                    />
                                    <span>
                                        Invoice file:
                                    </span>
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