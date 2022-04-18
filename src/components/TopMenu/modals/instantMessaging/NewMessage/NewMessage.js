import React, { useState } from 'react'

import styles from './NewMessage.module.scss'
import { Formik, Field, Form } from 'formik'
import Search from '../../../../Search/Search'

import SelectPatient from '../../../../SelectPatient/SelectPatient';
import SubmitButton from '../../../../ButtonControllers/SubmitButton';
import CancelButton from '../../../../ButtonControllers/CancelButton';


export default function NewMessage(props) {
    const groups = ['Group', 'Admin']
    const init_groupList = [
        { name: 'Aaron Denham', group: 'admin' },
        { name: 'Mirko Lucic', group: 'doctor' },
        { name: 'Alex Poulton', group: 'admin' },
        { name: 'Emma Stevenson', group: 'admin' },
        { name: 'Garry Purnell', group: 'doctor' },
        { name: 'Jake Rogers', group: 'admin' },
        { name: 'Lucy Sonson', group: 'doctor' },
        { name: 'Martin Brodzinski', group: 'admin' },
        { name: 'Niamh Wright', group: 'admin' }
    ]
    const [groupList, setGroupList] = useState(init_groupList)



    //SEARCH
    const [term, setTerm] = useState('')
    const update = (config) => {
        //in config: term, data (filtred)
        setTerm(config.term)

        setGroupList(config.data)
    }
    //-------



    //Select patient
    const [patient, setPatient] = useState('')

    return (
        <div className={styles.wrapper}>
            <Formik
                initialValues={{
                    subject: '',
                    group: 'Group',
                    selectAll: false,
                    message: '',
                    groupList: [],
                    patient: ''

                }}

                onSubmit={(values) => {

                    let combinedValues = {
                        ...values,
                        //так как я использую кастомные поля
                        patient,
                        ...(values.selectAll ? { groupList: init_groupList } : null),
                        ...(values.group != 'Group' && !values.selectAll ? { groupList: init_groupList.filter((itm) => itm.group.toLowerCase() == values.group.toLowerCase()) } : null)
                    }


                }}
            >
                {({ values, handleChange, handleBlur, setFieldValue }) =>
                (
                    <Form>
                        <div className="topControllers flex">
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="group"
                                >
                                    {groups.map((item, index) => <option value={item} key={`${index}__InstantNewMessage__groups`}>{item}</option>)}
                                </Field>
                            </div>

                            <div className="field-wrapper">
                                <Search
                                    placeholder="Search"
                                    customClasses={styles.input_search}
                                    term={term}
                                    update={update}
                                    searchField='name'
                                    data={init_groupList}
                                />
                            </div>
                        </div>

                        <div className="groupList">
                            <div >
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="selectAll"
                                        className="checkbox"
                                    />
                                    <span>All</span>
                                </label>
                            </div>
                            <div className="flex flex_wrap">
                                {
                                    groupList.map((item, index) => {
                                        //делим на четыре колонки
                                        if ((index + 1) % 6 === 0) {
                                            return <div className={styles.fullWidthEpmtyDiv} key={`${index}__InstantNewMessage__groupsListFULLWIDTH`}> </div>
                                        } else {
                                            return (
                                                <div className="groupList_element" key={`${index}__InstantNewMessage__groupsList`}>
                                                    <label>
                                                        <input
                                                            {...(
                                                                values.selectAll ?
                                                                    { checked: 'yes' }
                                                                    :
                                                                    null
                                                            )}

                                                            {...(
                                                                values.group.toLowerCase() == item.group.toLowerCase() ?
                                                                    { checked: 'yes' }
                                                                    :
                                                                    null

                                                            )}

                                                            type="checkbox"
                                                            name="groupList"
                                                            value={item.name}
                                                            className="checkbox "
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}

                                                        />
                                                        <span>{item.name} </span>
                                                    </label>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>

                            <div className="flex email_data">
                                <div className="leftSideArea">
                                    <Field
                                        name="subject"
                                        required={true}
                                        component="textarea"
                                        placeholder='Subject*'
                                        className={`field field_textarea ${styles.textarea}`}
                                    />
                                    <div className="flex flex_space-between">
                                        <SelectPatient
                                            placeholder="Patient"
                                            name='patient'
                                            customClass='autoPatient-common'
                                            change={(val) => setPatient(val)}
                                        />
                                    </div>
                                </div>
                                <div className="rightSideArea">
                                    <Field
                                        name="message"
                                        required={true}
                                        component="textarea"
                                        placeholder='Message*'
                                        className='field field_textarea'
                                    />
                                </div>
                            </div>
                            <div className="bottom-controllers">
                                <SubmitButton customClass={styles.submit} />
                                <CancelButton customClass={styles.cancel} handler={props.cancel} />

                            </div>

                        </div>
                    </Form>

                )
                }
            </Formik>
        </div >
    )
}