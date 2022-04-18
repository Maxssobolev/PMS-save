import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { title } from '../vars'
import { ReactComponent as EuroIcon } from '../../../assets/img/icons/euro-gray.svg'
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';

/*
* Форма работает на создание и апдейт 
* Создание - direction='create'
* обновление - direction='update'
* !!!!!ЕСЛИ НА ОБНОВЛЕНИЕ -ОБЯЗАТЕЛЬНО НУЖНО УКАЗАТЬ ID ПАЦИЕНТА И canselForm()!!!!!!*/

export default function PersonContactForm(props) {
    const menu = props.menu

    const { direction } = props
    const personData = {} // Данные с сервера по пациенту, которого нужно обновить

    const company = ['Select']
    const personType = ['Select']
    const coveragePercent = ['Select']
    const coverageMax = ['Select']
    return (
        <div className="personContactForm">
            <Formik
                initialValues={direction == 'create' ? {
                    company: '',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    personType: '',
                    title: '',
                    jobTitle: '',
                    phone1: '',
                    address: '',
                    postCode: '',
                    phone2: '',
                    email: '',
                    emailCC: '',
                    billingEmail: '',
                    coveragePercent: '',
                    coverageMax: '',
                    notes: ''
                }
                    :
                    personData
                }
                onSubmit={(values) => {

                    if (direction == 'create') {
                        //add to DB
                    }
                    else if (direction == 'update') {
                        //update patient
                    }



                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form>
                        <div className="flex form-row-mb">
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="company">
                                    {company.map((item, index) => <option value={item} key={`${index}__addNewContact_Person_company`} >{item}</option>)}
                                </Field>
                                <span>Company:</span>
                            </div>
                            {menu.isMobile &&
                                <div className="field-wrapper">
                                    <Field
                                        className="field"
                                        component="input"
                                        name="firstName"
                                    />
                                    <span>First Name:</span>
                                </div>}
                        </div>
                        <div className="flex form-row-mb">
                            {!menu.isMobile &&
                                <div className="field-wrapper">
                                    <Field
                                        className="field"
                                        component="input"
                                        name="firstName"
                                    />
                                    <span>First Name:</span>
                                </div>}

                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="middleName"
                                />
                                <span>Middle Name:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    required
                                    className="field"
                                    component="input"
                                    name="lastName"
                                />
                                <span>Last Name*:</span>
                            </div>
                        </div>
                        <div className="flex form-row-mb">
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="personType">
                                    {personType.map((item, index) => <option value={item} key={`${index}__addNewContact_personType`} >{item}</option>)}
                                </Field>
                                <span>Person Type:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="title">
                                    {title.map((item, index) => <option value={item} key={`${index}__addNewContact_title`} >{item}</option>)}
                                </Field>
                                <span>Title:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="jobTitle"
                                />
                                <span>Job Title:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="phone1"
                                    type='phone'
                                />
                                <span>Phone:</span>
                            </div>
                        </div>

                        <div className="flex form-row-mb flex_50 ">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    className="field field_100"
                                    component="input"
                                    name="address"
                                />
                                <span>Address:</span>
                            </div>
                            <div className="field-wrapper flex-grow">
                                <Field
                                    className="field field_100"
                                    component="input"
                                    name="postCode"
                                />
                                <span>Post Code:</span>
                            </div>
                        </div>

                        <div className="flex form-row-mb ">
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="phone2"
                                    type="phone"
                                />
                                <span>Phone:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="email"
                                    type="email"
                                />
                                <span>Email:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="emailCC"
                                    type="email"
                                />
                                <span>Email CC:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="billingEmail"
                                    type="email"
                                />
                                <span>Billing Email:</span>
                            </div>
                        </div>

                        <div className="flex form-row-mb">
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="coveragePercent">
                                    {coveragePercent.map((item, index) => <option value={item} key={`${index}__addNewContact_coveragePercent`} >{item}</option>)}
                                </Field>
                                <span>Coverage Percent:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="coverageMax">
                                    {coverageMax.map((item, index) => <option value={item} key={`${index}__addNewContact_coverageMax`} >{item}</option>)}
                                </Field>
                                <span>Coverage Max, <EuroIcon style={{
                                    width: '1em',
                                    height: '1em',
                                    marginBottom: '0.5em'
                                }} />:</span>
                            </div>
                        </div>
                        <div className="flex flex_50 form-row-mb form-row_note ">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    className="field field_100 field_textarea"
                                    component="textarea"
                                    name="note"
                                    placeholder="Notes" />
                            </div>
                        </div>
                        <div className="button-wrapper">
                            {direction == 'update' &&
                                <CancelButton handler={props?.closeModal} />
                            }
                            <SubmitButton text="Add person" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



