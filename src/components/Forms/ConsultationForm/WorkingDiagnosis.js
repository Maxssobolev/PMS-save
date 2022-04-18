import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ReactComponent as PlusIcon } from '../../../assets/img/icons/plus.svg'

export default function WorkingDiagnosis(props) {
    const customFieldUpdate = props.customFieldUpdate
    const [editorData, setEditorData] = useState('')
    const [selectPicker, setSelectPicker] = useState('Red Flags Value')
    const select = [
        { title: 'Red Flags', value: 'Red Flags Value' },
        { title: 'No New Red Flags', value: 'No New Red Flags Value' },
    ]
    return (
        <>
            <div className="middle-header">
                Working Diagnosis
            </div>

            <select
                className="field field_select"
                style={{
                    marginBottom: '12px'
                }}
                onChange={(event) => {
                    setSelectPicker(event.target.value)
                }}

            >
                {select.map((itm, index) => <option value={itm.value} key={`${index}__WD`} >{itm.title}</option>)}
            </select>

            <button type="button" className="plus" onClick={() => setEditorData(prev => (
                prev + `
                            ${selectPicker}
                        `
            ))}>{<PlusIcon />}</button>


            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    setEditorData(editor.getData())
                    customFieldUpdate('WD', editor.getData())

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