import React, { forwardRef, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { initialValues } from './initialValues'
import { group, title, months, range, sex, introduction, occupation, bodyPart, dischargeOutcome, nhsCCG, priorityType, startBackTool, doctorName, doctorSurgery, consultant, insuranceCompany, authorisedTreatmentSessions } from '../vars'
import SubmitButton from '../../ButtonControllers/SubmitButton'
import CancelButton from '../../ButtonControllers/CancelButton'
import { DatePickerField, datePickerCustomHeaderRender } from '../../CommonUtils/CommonUtils'

/*
* Форма работает на создание и апдейт 
* Создание - direction='create'
* обновление - direction='update'
* !!!!!ЕСЛИ НА ОБНОВЛЕНИЕ -ОБЯЗАТЕЛЬНО НУЖНО УКАЗАТЬ ID ПАЦИЕНТА И canselForm()!!!!!!*/
const isMobile = window.matchMedia("(max-width: 425px)").matches

export default function PatientForm(props) {
    const { direction } = props
    const patientData = props?.initialValues != undefined ? props.initialValues : {} // Данные с сервера по пациенту, которого нужно обновить
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker field_100 ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));

    return (
        <Formik
            initialValues={
                direction == 'create' ?
                    initialValues
                    :
                    patientData
            }
            //validationSchema={ValidationSchema}
            onSubmit={(values) => {

                console.log(values)
                //combinedValues - все данные формы тут, поля можно посмотреть в InitialValues

                if (direction == 'create') {
                    //add to DB
                }
                else if (direction == 'update') {
                    //update patient
                }
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <Form>
                    <div className="form-row">
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="group">
                                {group.map((item, index) => <option value={item.value} key={`${index}__addNewPatient_group`} >{item.title}</option>)}
                            </Field>
                            <span>Group:</span>
                        </div>
                        {isMobile &&
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="title">
                                    {title.map((item, index) => <option value={item} key={`${index}__addNewPatient_title`}>{item}</option>)}
                                </Field>
                                <span>Title:</span>
                            </div>
                        }
                    </div>
                    <div className="flex form-row">
                        {!isMobile &&
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="title">
                                    {title.map((item, index) => <option value={item} key={`${index}__addNewPatient_title`}>{item}</option>)}
                                </Field>
                                <span>Title:</span>
                            </div>
                        }

                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="sex">
                                {sex.map((item, index) => <option value={item} key={`${index}__addNewPatient_sex`}>{item}</option>)}

                            </Field>
                            <span>Sex:</span>
                        </div>
                        <div className="field-wrapper">

                            <DatePickerField
                                required
                                name="dob"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                className="field"
                                dateFormat="dd.MM.yyyy"
                                customInput={<CustomDatePickerField />}
                            />
                            <span>DOB (dd-mm-yyyy)*:</span>
                        </div>

                    </div>
                    <div className="flex form-row">
                        <div className="field-wrapper">
                            <input
                                className="field"
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            <span>First Name:</span>
                        </div>

                        <div className="field-wrapper">
                            <input
                                className="field"
                                type="text"
                                name="middleName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.middleName}
                            />
                            <span>Middle Name:</span>
                        </div>
                        <div className="field-wrapper">
                            <input
                                required
                                className="field"
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            <span>Last Name*:</span>
                        </div>
                        <div className="field-wrapper">
                            <input

                                className="field"
                                type="text"
                                name="knownAs"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.knownAs}
                            />
                            <span>Known As:</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Address
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <input
                                required
                                className="field field_100"
                                type="text"
                                name="addresLine1"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.addresLine1}
                            />
                            <span>Address Line 1*:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <input
                                className="field field_100"
                                type="text"
                                name="addresLine2"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.addresLine2}
                            />
                            <span>Address Line 2:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <input

                                className="field field_100"
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                            <span>Town/City:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <input
                                className="field field_100"
                                type="text"
                                name="postcode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.postcode}
                            />
                            <span>Postcode:</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Contact Info
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <input

                                className="field field_100"
                                type="tel"
                                name="homeTel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.homeTel}
                            />
                            <span>Home Tel:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <input
                                className="field field_100"
                                type="tel"
                                name="workTel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.workTel}
                            />
                            <span>Work Tel:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <input
                                className="field field_100"
                                type="tel"
                                name="mobileTel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobileTel}
                            />
                            <span>Mobile Tel:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <input

                                className="field field_100"
                                type="tel"
                                name="otherTel"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.otherTel}
                            />
                            <span>Other Contact Tel:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <input
                                className="field field_100"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span>E-mail:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <input

                                className="field field_100"
                                type="email"
                                name="emailCC"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.emailCC}
                            />
                            <span>E-mail CC:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50 flex_align-center" style={isMobile ? { marginTop: '15px' } : null}>
                        <div className='subscribe_checkbox'>Subscribed to booking emails</div>
                        <input
                            type="checkbox"
                            name="isSubscribe"
                            value="subscribe"
                            checked={values.isSubscribe}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="flex form-row">
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="introduction">
                                {introduction.map((item, index) => <option value={item} key={`${index}__addNewPatient_introduction`}>{item}</option>)}
                            </Field>
                            <span>Introduction:</span>
                        </div>

                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="occupation">
                                {occupation.map((item, index) => <option value={item} key={`${index}__addNewPatient_occupation`}>{item}</option>)}
                            </Field>
                            <span>Occupation:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="bodyPart">
                                {bodyPart.map((item, index) => <option value={item} key={`${index}__addNewPatient_bodyPart`}>{item}</option>)}
                            </Field>
                            <span>Body Part:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="dischargeOutcome">
                                {dischargeOutcome.map((item, index) => <option value={item} key={`${index}__addNewPatient_dischargeOutcome`}>{item}</option>)}
                            </Field>
                            <span>Discharge Outcome:</span>
                        </div>
                    </div>

                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        NHS
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper field-wrapper_widthFix flex-grow">
                            <input
                                className="field field_100"
                                type="text"
                                name="nhsNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nhsNumber}
                            />
                            <span>NHS Number:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_select field_100-pickers"
                                component="select"
                                name="nhsCCG">
                                {nhsCCG.map((item, index) => <option value={item} key={`${index}__addNewPatient_nhsCCG`}>{item}</option>)}
                            </Field>
                            <span>NHS CCG:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <DatePickerField

                                name="triageDate"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                className="field"
                                dateFormat="dd.MM.yyyy"
                                customInput={<CustomDatePickerField />}
                            />
                            <span>Triage Date (dd-mm-yyyy):</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <DatePickerField

                                name="referralDate"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                className="field"
                                dateFormat="dd.MM.yyyy"
                                customInput={<CustomDatePickerField />}
                            />
                            <span>Referral Date (dd-mm-yyyy):</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_select field_100-pickers"
                                component="select"
                                name="priorityType">
                                {priorityType.map((item, index) => <option value={item} key={`${index}__addNewPatient_priorityType`}>{item}</option>)}
                            </Field>
                            <span>Priority Type:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_select field_100-pickers"
                                component="select"
                                name="startBackTool">
                                {startBackTool.map((item, index) => <option value={item} key={`${index}__addNewPatient_startBackTool`}>{item}</option>)}
                            </Field>
                            <span>Start Back Tool:</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Doctor/Surgery/Consultant
                    </div>
                    <div className="flex form-row">
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="doctorName">
                                {doctorName.map((item, index) => <option value={item} key={`${index}__addNewPatient_doctorName`}>{item}</option>)}
                            </Field>
                            <span>Doctor name:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="doctorSurgery">
                                {doctorSurgery.map((item, index) => <option value={item} key={`${index}__addNewPatient_doctorSurgery`}>{item}</option>)}
                            </Field>
                            <span>Doctor surgery:</span>
                        </div>
                        <div className="field-wrapper">
                            <Field
                                className="field field_select"
                                component="select"
                                name="consultant">
                                {consultant.map((item, index) => <option value={item} key={`${index}__addNewPatient_consultant`}>{item}</option>)}
                            </Field>
                            <span>Consultant:</span>
                        </div>

                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Insurance [PHI/ML]
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper field-wrapper_widthFix flex-grow">
                            <input
                                className="field field_100"
                                type="text"
                                name="insuranceMembershipNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.insuranceMembershipNumber}
                            />
                            <span>Insurance Membership Number:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_select field_100-pickers"
                                component="select"
                                name="insuranceCompany">
                                {insuranceCompany.map((item, index) => <option value={item} key={`${index}__addNewPatient_insuranceCompany`}>{item}</option>)}
                            </Field>
                            <span>Insurance company:</span>
                        </div>
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper flex-grow">

                            <DatePickerField

                                name="insuranceClaimNumber"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                className="field"
                                dateFormat="dd.MM.yyyy"
                                customInput={<CustomDatePickerField />}
                            />
                            <span>Insurance Claim Number:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <DatePickerField
                                name="referralDate2"
                                renderCustomHeader={datePickerCustomHeaderRender}
                                className="field"
                                dateFormat="dd.MM.yyyy"
                                customInput={<CustomDatePickerField />}
                            />
                            <span>Referral Date (dd-mm-yyyy):</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Treatment Episode
                    </div>
                    <div className="flex form-row flex_50">
                        <div className="field-wrapper field-wrapper_widthFix flex-grow">
                            <input
                                className="field field_100"
                                type="text"
                                name="episodeName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.episodeName}
                            />
                            <span>Episode Name:</span>
                        </div>
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_select field_100-pickers"
                                component="select"
                                name="authorisedTreatmentSessions">
                                {authorisedTreatmentSessions.map((item, index) => <option value={item} key={`${index}__addNewPatient_authorisedTreatmentSessions`}>{item}</option>)}
                            </Field>
                            <span style={isMobile ? { top: '-100%' } : null}>Authorised Treatment Sessions (number):</span>
                        </div>
                    </div>
                    <div className="block-header block-header_mediumSize" style={isMobile ? { margin: '8px 0 0px 0' } : { margin: '20px 0 36px 0' }}>
                        Note
                    </div>
                    <div className="flex form-row flex_50 form-row_note">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100 field_textarea"
                                component="textarea"
                                name="diaryNote"
                                placeholder="Diary Note" />

                        </div>
                    </div>
                    <div className="flex flex_50 form-row form-row_note ">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100 field_textarea"
                                component="textarea"
                                name="accountsNote"
                                placeholder="Accounts Note" />

                        </div>
                    </div>
                    <div className="flex flex_50 form-row form-row_note ">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100 field_textarea"
                                component="textarea"
                                name="criticalNote"
                                placeholder="Critical Note" />

                        </div>
                    </div>
                    <div className="flex flex_50 form-row form-row_note ">
                        <div className="field-wrapper flex-grow">
                            <Field
                                className="field field_100 field_textarea"
                                component="textarea"
                                name="dischargeNote"
                                placeholder="Discharge Note" />

                        </div>
                    </div>
                    <div className="button-wrapper">
                        {direction == 'update' &&
                            <CancelButton handler={props?.closeModal} />
                        }
                        <SubmitButton text={direction == 'create' ? 'Add patient' : 'Save'} />
                    </div>
                </Form>
            )}
        </Formik>

    )
}