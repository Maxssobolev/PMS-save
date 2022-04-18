import React from 'react'
import UploadComponent from '../UploadComponent/UploadComponent'
import { Link } from 'react-router-dom'

export default function References({ formProps }) {

    return (
        <div className="formStep formStep-6 formStep-16">
            <div className="block-header block-header_darkblue">
                Please Would You Upload Two Written References
            </div>
            <div className="flex">
                <div className="upload-wrapper">
                    <UploadComponent
                        setFieldValue={formProps.setFieldValue}
                        field="ref_attachment1"
                        accept="image"
                        placeholder="Upload File #1"
                    />
                </div>
                <div className="upload-wrapper">
                    <UploadComponent
                        setFieldValue={formProps.setFieldValue}
                        field="ref_attachment2"
                        accept="image"
                        placeholder="Upload File #2"
                    />
                </div>
            </div>


        </div >
    )
}