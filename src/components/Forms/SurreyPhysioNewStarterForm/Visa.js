import React from 'react'
import { Field } from 'formik'
import UploadComponent from '../UploadComponent/UploadComponent'

export default function Visa({ formProps }) {

    return (
        <div className="formStep formStep-6">
            <div className="block-header block-header_darkblue">
                Please Attach Your Copy Of Visa
            </div>
            <div className="upload-wrapper">
                <UploadComponent
                    setFieldValue={formProps.setFieldValue}
                    field="visa_attachment"
                    accept="image"
                    placeholder="Drop File Here To Upload"
                />
            </div>
            <div className="flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field "
                        component="input"
                        name="visa_details"
                        style={{ width: '49%' }}
                    />
                    <span>
                        If you did not attach your Copy of Visa, please give details below
                    </span>
                </div>
            </div>
            <div className="flex" style={{ marginTop: '32px' }}>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field "
                        component="input"
                        name="visa_statusNumber"
                        style={{ width: '49%' }}
                    />
                    <span>
                        Please input your EU Pre Settled Status Number
                    </span>
                </div>
            </div>

        </div >
    )
}