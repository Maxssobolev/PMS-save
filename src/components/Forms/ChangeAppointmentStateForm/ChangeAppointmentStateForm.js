import React, { forwardRef, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';
import DatePicker from 'react-datepicker';
import { pv } from '../../../projectVars' //projectVariables
import CommonButton from '../../ButtonControllers/CommonButton';


export default function ChangeAppointmentStateForm(props) {

    const rowData = props?.rowData || {}
    const closeModal = props.closeModal

    const [timeArrived, setTimeArrived] = useState()
    const [timeSeen, setTimeSeen] = useState()
    const [timeCompleted, setTimeCompleted] = useState()

    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker  ${addclass}`} onClick={onClick} ref={ref} defaultValue={value ? value : 'Select'} />
    ));

    return (
        <div className="changeAppointmentStateForm">
            <Formik
                initialValues={
                    {
                        timeArrived: '',
                        timeSeen: '',
                        timeCompleted: '',
                    }
                }
                onSubmit={(values) => {

                    let combinedValues = {
                        ...values,
                        timeArrived,
                        timeSeen,
                        timeCompleted

                    }
                    console.log(combinedValues)
                    /*fetch(pv.CHANGE_APPOINTMENT_STATE_API, {
                        method: 'POST',
                        body: JSON.stringify({login, password}) 
                    })
                    .then(data => data.json()).then((r)=> {
                        if (r == 'положительный ответ от сервера')
                            
                    })*/
                }}
            >
                {
                    (props) => {
                        return (
                            <Form>

                                <div className="btn-removeStates-wrapper">
                                    <CommonButton customClass='button_yellow' text="Remove States" handler={() => { }} />
                                </div>

                                <div className="flex">
                                    <div className="field-wrapper">
                                        <DatePicker
                                            className="field"
                                            selected={timeArrived}
                                            onChange={(time) => setTimeArrived(time)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            dateFormat="h:mm aa"
                                            customInput={<CustomDatePickerField addclass="field_timepicker" />}

                                        />
                                        <span>Time Arrived:</span>
                                    </div>
                                    <div className="field-wrapper">
                                        <DatePicker
                                            className="field"
                                            selected={timeSeen}
                                            onChange={(time) => setTimeSeen(time)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            dateFormat="h:mm aa"
                                            customInput={<CustomDatePickerField addclass="field_timepicker" />}

                                        />
                                        <span>Time Seen:</span>
                                    </div>
                                    <div className="field-wrapper">
                                        <DatePicker
                                            className="field"
                                            selected={timeCompleted}
                                            onChange={(time) => setTimeCompleted(time)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            dateFormat="h:mm aa"
                                            customInput={<CustomDatePickerField addclass="field_timepicker" />}

                                        />
                                        <span>Time completed:</span>
                                    </div>
                                </div>



                                <div className="btn-wrapper">
                                    <div>
                                        <SubmitButton text="Save" />
                                        <CancelButton handler={closeModal} />
                                    </div>
                                    <div>
                                        <CommonButton text="Create A Charge" customClass="button_blue" handler={() => { }} />
                                    </div>
                                </div>

                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}
