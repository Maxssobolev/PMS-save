import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function PatientPresentsWith(props) {
    const customFieldUpdate = props.customFieldUpdate
    const [editorData, setEditorData] = useState('')
    const select = [
        { title: 'Red Flags', value: 'Red Flags Value' },
        { title: 'No New Red Flags', value: 'No New Red Flags Value' },
    ]
    return (
        <>
            <div className="middle-header">
                Patient Presents With
            </div>

            <div className="flex">
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                        Problem Text
                    `
                ))}>Problem</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    Examination Text
                    `
                ))}>Examination</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    Consent Text
                    `
                ))}>Consent</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    Treatment Text
                    `
                ))}>Treatment</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    Plan Text
                    `
                ))}>Plan</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    PROM Text
                    `
                ))}>PROM</button>
                <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                    prev + `
                    ${new Date()}
                    `
                ))}>Date/Time</button>
            </div>

            <select
                className="field field_select"
                style={{
                    marginBottom: '12px'
                }}
                onChange={(event) => {
                    setEditorData(prev => (
                        prev + `
                            ${event.target.value}
                        `
                    ))
                }}
            >
                {select.map((itm, index) => <option value={itm.value} key={`${index}__PPW`} >{itm.title}</option>)}
            </select>

            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    setEditorData(editor.getData())
                    customFieldUpdate('PPW', editor.getData())
                }}

                config={{
                    toolbar: [
                        'undo', 'redo', 'bold', 'italic', 'numberedList', 'bulletedList'
                    ]
                }}
            />



        </>
    )
}