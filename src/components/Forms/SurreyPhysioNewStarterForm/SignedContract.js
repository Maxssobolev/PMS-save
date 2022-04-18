import React from 'react'
import { Field } from 'formik'
import UploadComponent from '../UploadComponent/UploadComponent'

export default function SignedContract({ formProps }) {
    const isMobile = window.matchMedia("(max-width: 425px)").matches

    return (
        <div className="formStep formStep-6">
            <div className="block-header block-header_darkblue">
                Please Attach Your Signed Contract
            </div>
            <div className="upload-wrapper">
                <UploadComponent
                    setFieldValue={formProps.setFieldValue}
                    field="sc_attachment"
                    accept="image"
                    placeholder="Drop File Here To Upload"
                />
            </div>
            <div className="flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field "
                        component="input"
                        name="sc_details"
                        style={!isMobile ? { width: '49%' } : { width: '100%' }}
                    />
                    <span style={isMobile ? { top: '-100%' } : {}}>
                        If you did not attach your Signed Contract, please give details below
                    </span>
                </div>
            </div>

        </div >
    )
}