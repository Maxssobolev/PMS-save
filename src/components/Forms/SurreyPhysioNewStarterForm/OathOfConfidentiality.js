import React from 'react'
import UploadComponent from '../UploadComponent/UploadComponent'
import { Link } from 'react-router-dom'

export default function OathOfConfidentiality({ formProps }) {

    return (
        <div className="formStep formStep-6 formStep-15">
            <div className="block-header block-header_darkblue">
                Please Attach Your Oath Of Confidentiality
            </div>
            <div className="question">Use following <Link to="/" >Oath Of Confidentiality</Link> to complete and sign.</div>
            <div className="upload-wrapper">
                <UploadComponent
                    setFieldValue={formProps.setFieldValue}
                    field="oath_attachment"
                    accept="image"
                    placeholder="Drop File Here To Upload"
                />
            </div>


        </div >
    )
}