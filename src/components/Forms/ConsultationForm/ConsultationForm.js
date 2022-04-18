import React, { useState } from 'react';

import { Formik, Field, Form } from 'formik'
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';
import CommonButton from '../../ButtonControllers/CommonButton';
import { Col } from 'react-bootstrap';
import PatientPresentsWith from './PatientPresentsWith';
import WorkingDiagnosis from './WorkingDiagnosis';
import GoalsAndPlan from './GoalsAndPlan';


export default function ConsultationForm(props) {
    const closeModal = props.closeModal

    const person_name = 'Omar Djoudi'
    const title = "Mr"
    const sex = "Male"
    const age = "52"
    const email = 'odjuae@gmail.com'
    const dob = "03-02-1969"

    const flat = "15"
    const city = "London"
    const code1 = "SW11 5BG"
    const code2 = "074035222210"

    const history = [
        { title: 'CS (27-05-2021)', link: '#' },
        { title: 'CS (27-05-2021)', link: '#' },

    ]


    //second block rightSide
    const consultation = {
        date: '06-08-2021 10:26',
        by: 'Maria Grigoras',
        mg: 'MG',
        problem: 'Problem',
        text: 'Text'
    }

    const [ppw, setPPW] = useState('')
    const [wd, setWD] = useState('')
    const [gap, setGAP] = useState('')
    const customFieldUpdate = (field, value) => {
        switch (field) {
            case 'PPW':
                setPPW(value)
                break;

            case 'WD':
                setWD(value)
                break;

            case 'GAP':
                setGAP(value)
                break;
        }
    }
    return (
        <div className="consultationForm ">
            <Formik
                initialValues={{
                    message_red: '',
                    message_yellow: '',
                    ppw: '',
                    wd: '',
                    gap: '',

                }}

                onSubmit={(values) => {
                    let combinedValue = {
                        ...values,
                        ppw,
                        wd,
                        gap
                    }

                    /*fetch(pv.CONSULTATION_API, {
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
                                <div className="field-wrapper flex-grow messages-wrapper">
                                    <Field
                                        className="field field_100 field_textarea field_textarea_red"
                                        component="textarea"
                                        name="message_red"
                                        placeholder="Message" />
                                </div>
                                <div className="field-wrapper flex-grow messages-wrapper">
                                    <Field
                                        className="field field_100 field_textarea field_textarea_yellow"
                                        component="textarea"
                                        name="message_yellow"
                                        placeholder="Message" />
                                </div>
                            </div>

                            <div className="flex special_button_wrapper">
                                <button onClick={() => { }} className="button button_special blue">Body Chart</button>
                                <button onClick={() => { }} className="button button_special fiolent">View/Attach Documents</button>
                                <button onClick={() => { }} className="button button_special almostTransparent">Send Letter</button>
                                <button onClick={() => { }} className="button button_special blue">Create Exercise Plan</button>
                                <button onClick={() => { }} className="button button_special fiolent">Patient Details</button>
                                <button onClick={() => { }} className="button button_special almostTransparent">Bring Forward Notes</button>
                                <button onClick={() => { }} className="button button_special blue">Complete a PROM</button>
                                <button onClick={() => { }} className="button button_special fiolent">Print Cosultation</button>
                                <button onClick={() => { }} className="button button_special almostTransparent">Print All</button>
                                <button onClick={() => { }} className="button button_special blue">Email Consultation</button>
                                <div className="flex last-row">
                                    <button onClick={() => { }} className="button button_special fiolent">Email All</button>
                                    <button onClick={() => { }} className="button button_special almostTransparent">Appontments List</button>
                                    <button onClick={() => { }} className="button button_special blue">Telehealth</button>
                                    <button onClick={() => { }} className="button button_special fiolent">Mark Completed</button>
                                </div>
                            </div>

                            <div className="secondSection">
                                <div className="leftSideArea">
                                    <Col>
                                        <div className="small-header">
                                            Personal Information
                                        </div>
                                        <div className="info">
                                            <p>{title} {person_name}</p>
                                            <p>{sex} Aged {age}</p>
                                            <p>{dob}</p>
                                            <p>{email}</p>
                                        </div>
                                        <div className="info">
                                            <p>Flat {flat}</p>
                                            <p>{city}</p>
                                            <p>{code1}</p>
                                            <p>{code2}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="small-header">
                                            History
                                        </div>
                                        <div className="info">
                                            {history.map((item, index) => <a href={item.link} key={`${index}__historyLinks`} className="historyLink">{item.title}</a>)}

                                        </div>
                                    </Col>
                                </div>
                                <div className="rightSideArea">
                                    <div className="small-header small-header_bold consultation">
                                        Consultation On {consultation.date} Added By {consultation.by}
                                    </div>
                                    <div className="info">
                                        <p>{consultation.date}</p>
                                        <p>{consultation.mg}</p>
                                        <p>{consultation.problem}</p>
                                        <p>{consultation.text}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="thirdSection">
                                <PatientPresentsWith customFieldUpdate={customFieldUpdate} />
                            </div>
                            <div className="fourthSection">
                                <WorkingDiagnosis customFieldUpdate={customFieldUpdate} />
                            </div>
                            <div className="fiveSection">
                                <GoalsAndPlan customFieldUpdate={customFieldUpdate} />
                            </div>

                            <div className="btn-wrapper">
                                <SubmitButton text="Save" />
                                <CancelButton handler={closeModal} />
                                <CommonButton handler={() => { }} customClass="button_yellow" text="Delete" />
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}