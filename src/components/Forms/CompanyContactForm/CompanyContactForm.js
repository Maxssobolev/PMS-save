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
export default function CompanyContactForm(props) {
    const menu = props.menu

    const { direction } = props
    const companyData = {} // Данные с сервера по компании, которого нужно обновить

    const company = ['Select']
    const companyType = ['Select']
    const coveragePercent = ['Select']
    const coverageMax = ['Select']
    return (
        <div className="personContactForm">
            <Formik
                initialValues={direction == 'create' ? {
                    company: '',
                    companyType: '',
                    gpCode: '',
                    city: '',
                    country: '',
                    fax: '',
                    phone: '',
                    address: '',
                    postCode: '',
                    web: '',
                    email: '',
                    emailCC: '',
                    billingEmail: '',
                    coveragePercent: '',
                    coverageMax: '',
                    healthcode: ''
                } :
                    companyData
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
                                    {company.map((item, index) => <option value={item} key={`${index}__addNewContact_company`} >{item}</option>)}
                                </Field>
                                <span>Company:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="companyType">
                                    {companyType.map((item, index) => <option value={item} key={`${index}__addNewContact_company`} >{item}</option>)}
                                </Field>
                                <span>Company Type:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="gpCode"
                                />
                                <span>GP Code:</span>
                            </div>
                            {menu.isMobile && (
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100"
                                        component="input"
                                        name="address"
                                    />
                                    <span>Address:</span>
                                </div>)}
                        </div>

                        <div className="flex form-row-mb flex_50 ">
                            {!menu.isMobile && (
                                <div className="field-wrapper flex-grow" style={{ width: '50%' }}>
                                    <Field
                                        className="field field_100"
                                        component="input"
                                        name="address"
                                    />
                                    <span>Address:</span>
                                </div>)}
                            <div className="flex flex-grow" >
                                <div className="field-wrapper">
                                    <Field
                                        className="field"
                                        component="input"
                                        name="city"
                                    />
                                    <span>City:</span>
                                </div>
                                <div className="field-wrapper">
                                    <Field
                                        className="field"
                                        component="input"
                                        name="country"
                                    />
                                    <span>Country:</span>
                                </div>
                            </div>
                        </div>



                        <div className="flex form-row-mb">

                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="postCode"
                                />
                                <span>Post Code:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="phone"
                                    type='phone'
                                />
                                <span>Phone:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="fax"
                                />
                                <span>Fax:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="web"
                                />
                                <span>Web:</span>
                            </div>
                        </div>



                        <div className="flex form-row-mb ">

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
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="healthcode"

                                />
                                <span>Healthcode:</span>
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


