import React, { forwardRef, useState } from 'react'
import moment from 'moment'

import { Formik, Field, Form } from 'formik'
import DatePicker from 'react-datepicker'

import { initialValues } from './initialValues'
import { group, title, months, range, sex, introduction, occupation, bodyPart, dischargeOutcome, nhsCCG, priorityType, startBackTool, doctorName, doctorSurgery, consultant, insuranceCompany, authorisedTreatmentSessions } from '../vars'
import SubmitButton from '../../ButtonControllers/SubmitButton'
import CancelButton from '../../ButtonControllers/CancelButton'
import {datePickerCustomHeaderRender, DatePickerField} from "../../CommonUtils/CommonUtils";


/*
* Форма работает на создание и апдейт 
* Создание - direction='create'
* обновление - direction='update'
* !!!!!ЕСЛИ НА ОБНОВЛЕНИЕ -ОБЯЗАТЕЛЬНО НУЖНО УКАЗАТЬ ID ПАЦИЕНТА И canselForm()!!!!!!*/


export default function AddNewUserForm(props) {

    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker  ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {

                console.log(values)

            }}
        >
            {(props) => (
                <Form>

                    <div className="flex form-row">
                        <div className="field-wrapper">
                            <Field
                                className="field"
                                type="text"
                                name="firstName"
                                component="input"

                            />
                            <span>First Name:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                className="field"
                                type="text"
                                name="middleName"
                                component="input"

                            />
                            <span>Middle Name:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                required
                                className="field"
                                type="text"
                                name="lastName"
                                component="input"


                            />
                            <span>Last Name*:</span>
                        </div>
                        <div className="field-wrapper">
                            <DatePickerField
                                required
                                name="dob"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                customInput={<CustomDatePickerField />}
                                dateFormat="dd.MM.yyyy"
                            />
                            <span>DOB (dd-mm-yyyy)*:</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={{ margin: '20px 0 36px 0' }}>
                        Address
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                required
                                className="field field_100"
                                type="text"
                                name="addresLine1"
                                component="input"

                            />
                            <span>Address Line 1*:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="text"
                                name="addresLine2"
                                component="input"


                            />
                            <span>Address Line 2:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="text"
                                name="city"
                                component="input"

                            />
                            <span>Town/City:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="text"
                                name="postcode"
                                component="input"

                            />
                            <span>Postcode:</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={{ margin: '20px 0 36px 0' }}>
                        Contact Info
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="tel"
                                name="homeTel"
                                component="input"

                            />
                            <span>Home Tel:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="tel"
                                name="workTel"
                                component="input"

                            />
                            <span>Work Tel:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="tel"
                                name="mobileTel"
                                component="input"

                            />
                            <span>Mobile Tel:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100"
                                type="tel"
                                name="otherTel"
                                component="input"

                            />
                            <span>Other Contact Tel:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                component="input"
                                className="field field_100"
                                type="email"
                                name="email"

                            />
                            <span>E-mail:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                component="input"
                                className="field field_100"
                                type="email"
                                name="emailCC"
                            />
                            <span>E-mail CC:</span>
                        </div>
                    </div>
                    <div className="flex mt-small">
                        <label>
                            <Field
                                type="checkbox"
                                name="showInDirectory"
                                className="checkbox"
                            />
                            <span>Show in directory</span>
                        </label>
                    </div>
                    <div className="flex mt-small">
                        <label>
                            <Field
                                type="checkbox"
                                name="nonReturnerEmailReminders"
                                className="checkbox"
                            />
                            <span>Non-Returner Email Reminders</span>
                        </label>
                    </div>
                    <div className="block-header block-header_mediumSize" style={{ margin: '20px 0 16px 0' }}>
                        Member of Groups
                    </div>
                    <div className="flex mt-small">
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Super-User"
                            />
                            <span>Super-User</span>
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Practitioners"
                            />
                            <span>Practitioners</span>
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Administrators"
                            />
                            <span>Administrators</span>
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Managers"
                            />
                            <span>Managers</span>
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Patients"
                            />
                            <span>Patients</span>
                        </label>
                        <label>
                            <Field
                                type="checkbox"
                                name="membersInGroups"
                                className="checkbox"
                                value="Team Leaders"
                            />
                            <span>Team Leaders</span>
                        </label>
                    </div>

                    <div className="btn-wrapper">
                        <SubmitButton text="Add user" />
                        <CancelButton handler={() => {props.resetForm()}} />
                    </div>

                </Form>
            )}
        </Formik>

    )
}