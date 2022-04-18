import React from 'react'
import { Field } from 'formik'
import UploadComponent from '../UploadComponent/UploadComponent'

export default function CVUpload({ formProps }) {
    const isMobile = window.matchMedia("(max-width: 425px)").matches

    return (
        <div className="formStep formStep-6">
            <div className="block-header block-header_darkblue">
                Please Attach Your CV
            </div>
            <div className="upload-wrapper">
                <UploadComponent
                    setFieldValue={formProps.setFieldValue}
                    field="cv_attachment"
                    accept="image"
                    placeholder="Drop File Here To Upload"
                />
            </div>
            <div className="flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field "
                        component="input"
                        name="cv_details"
                        style={!isMobile ? { width: '49%' } : { width: '100%' }}
                    />
                    <span>
                        If you did not attach your CV, please give details below
                    </span>
                </div>
            </div>
            <div className="textarea-wrapper"></div>

            <div className="flex flex_50 form-row-mb form-row_note ">

                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100 field_textarea"
                        component="textarea"
                        name="cv_experience"
                        style={!isMobile ? { width: '49%' } : { width: '100%' }}
                        placeholder="Please provide 1-2 summary paragraphs of your previous experience for our website:" />
                </div>
            </div>
        </div >
    )
}