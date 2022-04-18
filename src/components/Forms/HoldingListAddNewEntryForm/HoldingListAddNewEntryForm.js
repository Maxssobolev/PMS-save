import React, { useState, forwardRef } from 'react'
import { Formik, Form, Field } from 'formik'
import SelectPatient from '../../SelectPatient/SelectPatient'
import { datePickerCustomHeaderRender, DatePickerField } from '../../CommonUtils/CommonUtils'
import SubmitButton from '../../ButtonControllers/SubmitButton'
import CancelButton from '../../ButtonControllers/CancelButton'

export default function HoldingListAddNewEntryForm(props) {
    const closeModal = props.closeModal
    const [patient, setPatient] = useState()
    const diaryUser = ['Any']
    const location = ['All Locations']
    const appointmentType = ['All Locations']
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker  ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <div className="holdingListAddNewEntryForm">
            <Formik
                initialValues={{
                    patient: '',
                    diaryUser: '',
                    location: '',
                    appointmentType: '',
                    priority: 'Next Available',
                    expiryDate: '',
                    notes: '',
                }}
                onSubmit={(values) => {
                    let combinedValues = {
                        ...values,
                        patient
                    }
                }}
            >
                {(props) => (
                    <Form>
                        <div className="row-form selectPatient">
                            <SelectPatient
                                placeholder="Patient"
                                name='patient'
                                customClass='autoPatient-common'
                                change={(val) => setPatient(val)}
                            />
                        </div>
                        <div className="row-form flex">
                            <div className="field-wrapper">
                                <Field
                                    required
                                    className="field field_select"
                                    component="select"
                                    name="location">
                                    {location.map((item, index) => <option value={item} key={`${index}__addNewEntry__location`} >{item}</option>)}
                                </Field>
                                <span>Location*:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    required
                                    className="field field_select"
                                    component="select"
                                    name="diaryUser">
                                    {diaryUser.map((item, index) => <option value={item} key={`${index}__addNewEntry__diaryUser`} >{item}</option>)}
                                </Field>
                                <span>Diary User*:</span>
                            </div>
                        </div>
                        <div className="row-form flex">
                            <div className="field-wrapper">
                                <Field
                                    required
                                    className="field field_select"
                                    component="select"
                                    name="appointmentType">
                                    {appointmentType.map((item, index) => <option value={item} key={`${index}__addNewEntry__appointmentType`} >{item}</option>)}
                                </Field>
                                <span>Appointment Type*:</span>
                            </div>
                        </div>
                        <div className="row-form">
                            <div className="field-wrapper flex radio-wrapper">
                                <label>
                                    <Field type="radio" name="priority" value="Urgent" />
                                    <span>Urgent</span>
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Next Available" />
                                    <span>Next Available</span>
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Anytime" />
                                    <span>Anytime</span>
                                </label>
                                <span>Priority*:</span>
                            </div>
                        </div>

                        <div className="row-form">
                            <div className="field-wrapper">
                                <DatePickerField
                                    name="expiryDate"
                                    renderCustomHeader={datePickerCustomHeaderRender}
                                    customInput={<CustomDatePickerField />}
                                    dateFormat="dd.MM.yyyy"
                                />
                                <span>
                                    Expiry Date (dd-mm-yyyy)
                                </span>
                            </div>
                        </div>

                        <div className="flex flex_50 form-row-mb form-row_note ">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    className="field field_100 field_textarea"
                                    component="textarea"
                                    name="notes"
                                    placeholder="Notes" />
                            </div>
                        </div>

                        <div className="btn-controllers">
                            <SubmitButton text="Save" />
                            <CancelButton handler={closeModal} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}