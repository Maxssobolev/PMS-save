import React from 'react'
import { Field } from 'formik'


export default function HealthQuestions(props) {
    const rows = [
        { title: 'Hearing Disability', name: 'hq_hearingDisability' },
        { title: 'Eye Disability/Visual Problems?', name: 'hq_eyeDisability' },
        { title: 'Epilepsy/Oher Seizure Conditions?', name: 'hq_seizureConditions' },
        { title: 'Diabetes?', name: 'hq_diabetes' },
        { title: 'Are there any other health issues you need to tell us about?', name: 'hq_otherHealthIssues' },
    ]
    return (
        <div className="formStep formStep-5">
            <div className="question mb">Do you suffer, or have you ever suffered in the past, from any of the following conditions?</div>
            <table className="_table">
                <thead>
                    <th className="column-80"></th>
                    <th className="column-10 yes">Yes</th>
                    <th className="column-10 no">No</th>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={`${index}__hq_row`}>
                            <td className="column-80">{row.title}</td>
                            <td className="column-10"><Field type="radio" name={row.name} value="yes" /></td>
                            <td className="column-10"><Field type="radio" name={row.name} value="no" className="radio_red" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex_50 form-row-mb form-row_note ">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100 field_textarea"
                        component="textarea"
                        name="hq_note"
                        placeholder="If you answered YES to any of the above, please give details below" />
                </div>
            </div>
        </div >
    )
}