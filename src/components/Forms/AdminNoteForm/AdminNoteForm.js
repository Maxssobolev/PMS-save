import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';


export default function AdminNoteForm(props) {
    const [editorData, setEditorData] = useState('')
    const closeModal = props.closeModal
    return (
        <Formik
            initialValues={{ editorData: '' }}
            onSubmit={(values) => {
                let combinedValues = {
                    ...values,
                    editorData
                }
                /*fetch(pv.ADMIN_NOTE_API, {
                       method: 'POST',
                       body: JSON.stringify({login, password})
                   })
                   .then(data => data.json()).then((r)=> {
                       if (r == 'положительный ответ от сервера')
                           loginSuccess()
                   })*/
            }}
        >
            {(props) => (
                <Form>
                    <div className="flex insert-btns">
                        <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                            prev + `
                        Date Text
                    `
                        ))}>Date</button>
                        <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                            prev + `
                    Telephone Call Text
                    `
                        ))}>Telephone Call</button>
                        <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                            prev + `
                    Left Voicemail Text
                    `
                        ))}>Left Voicemail</button>
                        <button type="button" className="inline-button" onClick={() => setEditorData(prev => (
                            prev + `
                    Email Text
                    `
                        ))}>Email</button>

                    </div>

                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={(event, editor) => {
                            setEditorData(editor.getData())
                        }}
                        config={{
                            toolbar: [
                                'undo', 'redo', 'bold', 'italic', 'numberedList', 'bulletedList'
                            ]
                        }}
                    />

                    <div className="btn-wrapper">
                        <SubmitButton text="Save" />
                        <CancelButton handler={closeModal} />
                    </div>
                </Form>
            )}


        </Formik>
    )
}