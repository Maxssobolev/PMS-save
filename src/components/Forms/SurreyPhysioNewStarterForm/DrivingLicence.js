import React from 'react'
import { Field } from 'formik'
import UploadComponent from '../UploadComponent/UploadComponent'

export default function DrivingLicence({ formProps }) {

    return (
        <div className="formStep formStep-6">
            <div className="block-header block-header_darkblue">
                Please Attach Your Copy Of Driving Licence
            </div>
            <div className="upload-wrapper">
                <UploadComponent
                    setFieldValue={formProps.setFieldValue}
                    field="dl_attachment"
                    accept="image"
                    placeholder="Drop File Here To Upload"
                />
            </div>
            <div className="flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field "
                        component="input"
                        name="dl_details"
                        style={{ width: '49%' }}
                    />
                    <span>

                        If you did not attach your Copy of Driving Licence, please give details below                    </span>
                </div>
            </div>

        </div >
    )
}