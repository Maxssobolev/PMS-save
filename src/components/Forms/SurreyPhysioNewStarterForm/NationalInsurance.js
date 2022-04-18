import React from 'react'
import { Field } from 'formik'


export default function NationalInsurance(props) {

    return (
        <div className="formStep formStep-3">
            <div className="mb">
                <div className="question">Do you have a National Insurance Number? *</div>
                <label>
                    <Field type="radio" name="ni_haveNINumber" value="yes" />
                    Yes
                </label>
                <label>
                    <Field type="radio" name="ni_haveNINumber" value="no" />
                    No or Not sure
                </label>
            </div>

            <div className="bm">
                <div className="question">National Insurance Number:</div>
                <Field
                    style={{ width: '250px' }}
                    className="field"
                    component="input"
                    name="ni_NINumber"
                    placeholder="This should be in the format AA111111A"
                />
            </div>


        </div>
    )
}