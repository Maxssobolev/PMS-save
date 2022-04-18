import React, { forwardRef } from 'react'
import { Field } from 'formik'
import { datePickerCustomHeaderRender, DatePickerField } from '../../CommonUtils/CommonUtils'

export default function PersonalDetails(props) {
    const isMobile = window.matchMedia("(max-width: 425px)").matches

    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker  ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <div className="formStep">
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_firstName"
                        required
                    />
                    <span>First Name*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_middleName"

                    />
                    <span>Middle Name:</span>
                </div>
            </div>
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_lastName"
                        required
                    />
                    <span>Last Name*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_preferredName"

                    />
                    <span>Preferred name {!isMobile && "(if different to first name)"}</span>
                </div>
            </div>
            <div className="flex mb">
                <div className="field-wrapper">
                    <DatePickerField
                        name="pd_dob"
                        required
                        renderCustomHeader={datePickerCustomHeaderRender}
                        customInput={<CustomDatePickerField />}
                        dateFormat="dd.MM.yyyy"
                    />
                    <span>Date of birth*:</span>
                </div>
            </div>
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_address1"
                        required
                    />
                    <span>Home Address Line 1*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_address2"
                    />
                    <span>Home Address Line 2:</span>
                </div>
            </div>

            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_city"
                        required
                    />
                    <span>Town/City*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_country"
                    />
                    <span>Country (if not UK): </span>
                </div>
            </div>
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_postcode"
                        required
                    />
                    <span>Postcode*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_preBooked"
                        placeholder="Please input as individual days or range"
                    />
                    <span>{!isMobile ? "Do you have any pre-booked holidays?" : "Any pre-booked holidays?"}</span>
                </div>
            </div>
            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_mobileTel"
                        type="tel"
                        required
                    />
                    <span>Mobile phone number*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_otherTel"
                        type="tel"
                    />
                    <span>Other phone number:</span>
                </div>
            </div>

            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_hcpcRegNumber"
                        required
                    />
                    <span>HCPC Registration Number*:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_cspRegNumber"
                    />
                    <span>CSP Registration Number:</span>
                </div>
            </div>

            <div className="flex mb">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_dbsNumber"

                    />
                    <span>DBS Number:</span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="pd_shirtSize"
                    />
                    <span>Shirt Size: S/M/L</span>
                </div>
            </div>

            <div className="flex mb">
                <div className="field-wrapper ">
                    <Field
                        className="field "
                        component="input"
                        name="pd_email"
                        type="email"

                    />
                    <span>Personal Email address*:</span>
                </div>
            </div>
        </div>
    )
}