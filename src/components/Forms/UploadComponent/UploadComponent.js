import React from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadComponent(props) {
    const { setFieldValue } = props;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: props.accept,
        onDrop: acceptedFiles => {
            setFieldValue(props.field, acceptedFiles);
        }
    });

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })}>
                <div className="myplaceholder">{props.placeholder && (props.placeholder)}</div>
                <input {...getInputProps()} />
            </div>
        </div>
    )
}