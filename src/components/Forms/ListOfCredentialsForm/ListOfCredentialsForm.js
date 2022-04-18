import { Formik, Form, Field } from 'formik';
import React from 'react';
import CancelButton from '../../ButtonControllers/CancelButton';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import { pv } from '../../../projectVars';

export default function ListOfCredentialsForm(props) {
    const direction = props.direction
    const rowData = direction == 'update' ? props.rowData : {}
    const thisModalHide = props.thisModalHide
    const prevModalShow = props.prevModalShow

    return (
        <div className="listOfCredentialsForm">
            <Formik

                initialValues={
                    direction == 'create' ?
                        {
                            site: '',
                            url: '',
                            login: '',
                            password: ''
                        }
                        :
                        {
                            site: rowData.site,
                            url: rowData.url,
                            login: rowData.login,
                            password: rowData.password
                        }
                }

                onSubmit={(values) => {
                    if (direction == 'update') {
                        /*fetch(pv.CREDENTIALS_API_UPDATE, {
                            method: 'POST',
                            body: JSON.stringify({login, password})
                        })
                        .then(data => data.json()).then((r)=> {
                            if (r == 'положительный ответ от сервера')
                            
                        })*/
                    } else {
                        /*fetch(pv.CREDENTIALS_API_CREATE, {
                        method: 'POST',
                        body: JSON.stringify({login, password})
                    })
                    .then(data => data.json()).then((r)=> {
                        if (r == 'положительный ответ от сервера')
                        
                    })*/
                    }

                    //in the end
                    thisModalHide(); prevModalShow();
                }}
            >
                {(props) => (
                    <Form>
                        <div className="flex  flex_50">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    required
                                    className="field field_100"
                                    component="input"
                                    name="site"

                                />
                                <span>Site*:</span>
                            </div>
                            <div className="field-wrapper flex-grow">
                                <Field

                                    className="field field_100"
                                    component="input"
                                    name="url"

                                />
                                <span>Url:</span>
                            </div>
                        </div>
                        <div className="flex  flex_50">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    required
                                    className="field field_100"
                                    component="input"
                                    name="login"

                                />
                                <span>Login*:</span>
                            </div>
                            <div className="field-wrapper flex-grow">
                                <Field
                                    required
                                    className="field field_100"
                                    component="input"
                                    name="password"

                                />
                                <span>Password*:</span>
                            </div>
                        </div>

                        <div className="btn-wrapper">
                            <CancelButton text="Cancel" handler={() => { thisModalHide(); prevModalShow(); }} />
                            <SubmitButton text={direction == 'create' ? "Add" : "Save"} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}