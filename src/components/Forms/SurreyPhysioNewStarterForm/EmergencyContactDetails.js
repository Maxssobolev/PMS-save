import React from 'react'
import { Field } from 'formik'


export default function EmergencyContactDetails(props) {

    return (
        <div className="formStep">
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="ecd_name"
                        required
                    />
                    <span>Name*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="ecd_mobileTel"
                        type="tel"
                        required
                    />
                    <span>Mobile phone number*:</span>
                </div>
            </div>
        </div>
    )
}