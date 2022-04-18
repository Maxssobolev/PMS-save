import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Formik, Form, Field } from 'formik'
import SubmitButton from '../../components/ButtonControllers/SubmitButton';
import CommonButton from '../../components/ButtonControllers/CommonButton';
export default function LoginAuth(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth)

    if (user.token !== null)
        return <Redirect to='/home' />
    else
        return (
            <div className="login">
                <div className="widget-block">
                    <div className="block-header">
                        Login
                    </div>
                    <div className="_form">
                        <Formik
                            initialValues={{
                                login: '',
                                password: '',

                            }}
                            onSubmit={({ login, password }, { setErrors }) => {
                                dispatch({ type: 'LOGIN_SUCCESS', payload: { token: 'token' } })
                            }}
                        >
                            {
                                (props) => {
                                    return (
                                        <Form>
                                            {props.errors && <div className="flex" style={{ color: 'red', justifyContent: 'center', marginBottom: '16px' }}>{props.errors.failed}</div>}
                                            <div className="flex">
                                                <div className="field-wrapper flex-grow">
                                                    <Field

                                                        className="field field_100"
                                                        component="input"
                                                        name="login"
                                                        placeholder="Your PMS Login"
                                                    />

                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="field-wrapper flex-grow">
                                                    <Field
                                                        className="field field_100 "
                                                        component="input"
                                                        type="password"
                                                        name="password"
                                                        placeholder="Your PMS Password"
                                                    />

                                                </div>
                                            </div>

                                            <div className="btn-wrapper">
                                                <div className="forgot" onClick={() => { }}>Forgot your password?</div>
                                                <SubmitButton text="Enter" />
                                            </div>

                                        </Form>
                                    )
                                }
                            }

                        </Formik>
                    </div>
                </div>
                <div className="bottom-controllers">
                    <div className="pre-header">For patients:</div>
                    <CommonButton text="Online booking" customClass="button_accent" handler={() => { }} />
                    <CommonButton text="Passport" customClass="button_accent" handler={() => { }} />
                </div>
            </div>
        )
}