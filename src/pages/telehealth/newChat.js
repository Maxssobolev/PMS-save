import { Formik, Form, Field } from 'formik'
import React from 'react'
import CancelButton from '../../components/ButtonControllers/CancelButton';
import SubmitButton from '../../components/ButtonControllers/SubmitButton';
import { useSelector, connect } from 'react-redux';
function NewChatTelehealth() {
    const { isMobile } = useSelector((state) => state.menu)

    const patients = ['Select']
    const link = ''
    return (
        <div className="newChat">
            <section className="header-section">
                <h1 className="page-header">PMS Video Chat</h1>
            </section>

            <section>
                <div className="widget-block">
                    <div className="leftSideArea">
                        <div className="message">
                            Send the following link to the patient
                            <div className="link">{link}</div>
                        </div>
                        {isMobile && <div className="rightSideArea">
                            <div className="message">
                                <p>Joining room</p>
                                <p>Unable to access Camera and Microphone</p>
                                <p>Could not connect to Twilio: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.</p>
                            </div>
                        </div>
                        }

                        <div className="form">
                            <Formik
                                initialValues={{
                                    patient: '',
                                    email: '',
                                }}
                                onSubmit={(values) => {
                                    //smth
                                }}
                            >
                                {
                                    (props) => (
                                        <Form>
                                            <div className="flex">
                                                <div className="field-wrapper">
                                                    <Field
                                                        className="field field_select"
                                                        component="select"
                                                        name="patient">
                                                        {patients.map((item, index) => <option value={item} key={`${index}__pms_video_patients`} >{item}</option>)}
                                                    </Field>
                                                    <span>Patient:</span>
                                                </div>
                                                <div className="field-wrapper">
                                                    <Field
                                                        className="field"
                                                        component="input"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="video">

                                            </div>

                                            <div className="button-wrapper">

                                                <SubmitButton text="Join Room" />
                                                <CancelButton text="Leave Room" handler={() => { }} />
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                    {!isMobile && <div className="rightSideArea">
                        <div className="message">
                            <p>Joining room</p>
                            <p>Unable to access Camera and Microphone</p>
                            <p>Could not connect to Twilio: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.</p>
                        </div>
                    </div>
                    }
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps)(NewChatTelehealth)