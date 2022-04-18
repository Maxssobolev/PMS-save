import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';

import { pv } from '../../../projectVars' //projectVariables

export default function TreatmentEpisodeForm(props) {
    const direction = props.direction
    const rowData = props?.rowData || {}
    const closeModal = props.closeModal
    return (
        <div className="treatmentEpisodeForm">
            <Formik
                initialValues={
                    direction == 'create' ?
                        {
                            episodeName: '',
                            authorisedTreatmentSessions: '',
                            notes: '',
                        }
                        :
                        {
                            episodeName: rowData.episodeName,
                            authorisedTreatmentSessions: rowData.authorisedTreatmentSessions,
                            notes: '',
                            completed: rowData.completed
                        }
                }
                onSubmit={(values) => {

                    if (direction == 'create') {
                        /*fetch(pv.TREATMENTEPISODE_API_CREATE, {
                            method: 'POST',
                            body: JSON.stringify({login, password})
                        })
                        .then(data => data.json()).then((r)=> {
                            if (r == 'положительный ответ от сервера')
                                
                        })*/
                    } else {
                        /*fetch(pv.TREATMENTEPISODE_API_UPDATE, {
                            method: 'POST',
                            body: JSON.stringify({login, password})
                        })
                        .then(data => data.json()).then((r)=> {
                            if (r == 'положительный ответ от сервера')
                                
                        })*/
                    }
                }}
            >
                {
                    (props) => {
                        return (
                            <Form>
                                <div className="flex">
                                    <div className="field-wrapper flex-grow">
                                        <Field
                                            className="field field_100"
                                            component="input"
                                            name="episodeName"
                                        />
                                        <span>Episode Name:</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="field-wrapper flex-grow">
                                        <Field
                                            className="field field_100"
                                            component="input"
                                            type="number"
                                            min={0}
                                            name="authorisedTreatmentSessions"
                                        />
                                        <span>Authorised Treatment Sessions (number)</span>

                                    </div>
                                </div>

                                <div className="flex row-note">
                                    <div className="field-wrapper flex-grow">
                                        <Field
                                            className="field field_textarea field_100"
                                            component="textarea"
                                            name="note"
                                            placeholder="Authorised Treatment Sessions Notes"
                                        />
                                    </div>
                                </div>
                                {direction == 'update' &&
                                    (
                                        <>

                                            <div className="field-wrapper checkbox-wrapper">
                                                <label >
                                                    <Field
                                                        className="checkbox"
                                                        type="checkbox"
                                                        name="completed"
                                                    />
                                                    <span>Is completed</span>
                                                </label>
                                            </div>

                                            <div className="additionalInfo">
                                                <div>Created: {rowData.dateAdded}</div>
                                                <div>Last Modified: {rowData.lastModified}</div>
                                            </div>

                                        </>
                                    )
                                }
                                <div className="btn-wrapper">

                                    <SubmitButton text="Save" />
                                    <CancelButton handler={closeModal} />

                                </div>

                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}