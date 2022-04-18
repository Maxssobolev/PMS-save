import React, { useState, forwardRef } from 'react';
import moment from 'moment'
import { Form, Formik, Field } from 'formik'
import DatePicker from 'react-datepicker'

import { months, range } from '../../Forms/vars'
import SelectPatient from '../../SelectPatient/SelectPatient'
import AppointmentRepeatForm from './AppointmentRepeatForm'
import SubmitButton from '../../ButtonControllers/SubmitButton'
import CancelButton from '../../ButtonControllers/CancelButton'

export default function AppointmentForm(props) {
    const isMobile = window.matchMedia("(max-width: 425px)").matches
    const direction = props.direction
    let lastModified = '10-08-20 12:54'
    let created = '10-08-20 12:54'
    const location = ['Carshalton/Sutton']
    const appointmentWith = ['Any']
    const treatmentEpisode = ['Paid Visit']
    const appointmentTime = ['PHI-FU']
    const treatmentType = ['Select']
    const endsInSelect1 = ['Basis']
    const endsInSelect2 = ['']
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [duration, setDuration] = useState(new Date().setHours(0, 10))
    const [patient, setPatient] = useState('')
    const [until, setUntil] = useState(null)

    const cancel = props.cancel
    const years = range(1940, moment().year());
    const dataForRepeatBlock = {
        basis: ['Basis'],
        until: { until, update: (val) => setUntil(val) },
        endsIn: { endsInSelect1, endsInSelect2 },

    }
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));

    return (
        <div className="newAppointment">
            {direction == 'update' &&
                <div className="special-info">
                    <div><span>Created</span>{created}</div>
                    <div><span>Last Modified</span>{lastModified}</div>
                </div>
            }
            <Formik
                initialValues={{
                    location: '',
                    appointmentWith: 'Any',
                    date: '',
                    time: '',
                    duration: '',
                    patient: '',
                    basis: '',
                    treatmentEpisode: '',
                    appointmentTime: '',
                    treatmentType: '',
                    until: '',
                    endsIn: '',
                    appointmentNote: ''
                }}
                onSubmit={(values) => {
                    let combinedValues = {
                        ...values,
                        //так как я использую кастомные поля
                        patient,
                        date,
                        time,
                        duration,
                        until
                    }

                }}>
                {
                    (props) => (
                        <Form>
                            <div className="flex mb">
                                <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="location">
                                        {location.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_Location`}>{item}</option>)}
                                    </Field>
                                    <span>Location*:</span>
                                </div>
                                <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="appointmentWith">
                                        {appointmentWith.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_appointmentWith`}>{item}</option>)}
                                    </Field>
                                    <span>Appointment with*:</span>
                                </div>
                            </div>
                            <div className="flex mb">
                                <div className="field-wrapper">
                                    <DatePicker
                                        required
                                        className="field"
                                        selected={date}
                                        renderCustomHeader={({
                                            date,
                                            changeYear,
                                            changeMonth

                                        }) => (
                                            <div
                                                style={{
                                                    margin: 10,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >

                                                <select
                                                    value={date.getYear()}
                                                    onChange={({ target: { value } }) => changeYear(value)}
                                                >
                                                    {years.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>

                                                <select
                                                    value={months[(date).getMonth()]}
                                                    onChange={({ target: { value } }) =>
                                                        changeMonth(months.indexOf(value))
                                                    }
                                                >
                                                    {months.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>


                                            </div>
                                        )}
                                        onChange={(date) => setDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        customInput={<CustomDatePickerField />}
                                    />
                                    <span>Date (dd-mm-yyyy)*:</span>
                                </div>
                                <div className="field-wrapper">
                                    <DatePicker
                                        required
                                        className="field"
                                        selected={time}
                                        onChange={(time) => setTime(time)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="h:mm aa"
                                        customInput={<CustomDatePickerField addclass="field_timepicker" />}

                                    />
                                    <span>Time (00:00 format)*:</span>
                                </div>
                                <div className="field-wrapper" style={isMobile ? { marginTop: '25px' } : null}>
                                    <DatePicker
                                        required
                                        className="field"
                                        selected={duration}
                                        onChange={(time) => setDuration(time)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={5}
                                        timeFormat="HH:mm"
                                        dateFormat="HH:mm"
                                        customInput={<CustomDatePickerField addclass="field_timepicker" />}

                                    />
                                    <span>Duration (00:00 format)*:</span>
                                </div>
                                {isMobile && <div className="field-wrapper" style={{ marginTop: '25px' }}>
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="appointmentTime">
                                        {appointmentTime.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_appointmentTime`}>{item}</option>)}
                                    </Field>
                                    <span>Appointment time*:</span>
                                </div>}
                            </div>

                            <div className="flex mb">
                                <div className="field-wrapper">
                                    <SelectPatient
                                        placeholder="Select"
                                        name='patient'
                                        customClass='autoPatient-common autoPatient-common_Appointment'
                                        change={(val) => setPatient(val)}
                                    />
                                </div>
                                {!isMobile && <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="treatmentEpisode">
                                        {treatmentEpisode.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_treatmentEpisode`}>{item}</option>)}
                                    </Field>
                                    <span>Treatment Episode*:</span>
                                </div>}
                                {!isMobile && <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="appointmentTime">
                                        {appointmentTime.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_appointmentTime`}>{item}</option>)}
                                    </Field>
                                    <span>Appointment time*:</span>
                                </div>}
                            </div>

                            <div className="flex mb-half">
                                <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="treatmentType">
                                        {treatmentType.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_treatmentType`}>{item}</option>)}
                                    </Field>
                                    <span>Treatment Type*:</span>
                                </div>
                                {isMobile && <div className="field-wrapper">
                                    <Field
                                        className="field field_select"
                                        component="select"
                                        name="treatmentEpisode">
                                        {treatmentEpisode.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_treatmentEpisode`}>{item}</option>)}
                                    </Field>
                                    <span>Treatment Episode*:</span>
                                </div>}
                            </div>

                            <div className="flex repeat-blok mb-half">
                                <AppointmentRepeatForm
                                    isMobile={isMobile}
                                    data={dataForRepeatBlock}
                                />
                            </div>
                            <div className="flex flex_50 form-row form-row_note ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 field_textarea"
                                        component="textarea"
                                        name="appointmentNote"
                                        placeholder="Appointment Note" />

                                </div>
                            </div>
                            <div className="bottom-controllers">
                                <SubmitButton />
                                <CancelButton handler={cancel} />
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </div>

    )
}