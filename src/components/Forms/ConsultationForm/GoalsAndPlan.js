import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ReactComponent as PlusIcon } from '../../../assets/img/icons/plus.svg'

export default function GoalsAndPlan(props) {
    const [editorData, setEditorData] = useState('')
    const customFieldUpdate = props.customFieldUpdate

    return (
        <>
            <div className="middle-header">
                Goals And Plan
            </div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    setEditorData(editor.getData())
                    customFieldUpdate('GAP', editor.getData())

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