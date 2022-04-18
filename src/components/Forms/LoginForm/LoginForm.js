import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';

import { pv } from '../../../projectVars' //projectVariables

export default function LoginForm(props) {
    const loginSuccess = props.loginSuccess
    const inputUsername = useRef()

    useEffect(() => {
        if (inputUsername) {
            inputUsername.current.focus()
        }
    }, [inputUsername])
    return (
        <div className="loginForm">
            <Formik
                initialValues={{
                    login: '',
                    password: '',

                }}
                onSubmit={({ login, password }, { setErrors }) => {
                    //devMode
                    const db = { login: '1', password: '1' }
                    if (login == db.login && password == db.password) {
                        loginSuccess()
                    } else {
                        setErrors({ failed: 'Invalid login or password' })
                    }
                    //-------

                    /*fetch(pv.LOGIN_API_URL, {
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
                    (props) => {
                        return (
                            <Form>
                                {props.errors && <div className="flex" style={{ color: 'red', justifyContent: 'center', marginBottom: '16px' }}>{props.errors.failed}</div>}
                                <div className="flex">
                                    <div className="field-wrapper">
                                        <Field
                                            innerRef={inputUsername}
                                            className="field"
                                            component="input"
                                            name="login"
                                            placeholder="Your PMS Login"
                                        />

                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="field-wrapper">
                                        <Field
                                            className="field"
                                            component="input"
                                            type="password"
                                            name="password"
                                            placeholder="Your PMS Password"
                                        />

                                    </div>
                                </div>

                                <div className="btn-wrapper">
                                    <SubmitButton text="Submit" />
                                </div>

                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}