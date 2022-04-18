import React, { useState, forwardRef } from 'react';
import { Formik, Form, Field } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';
import CommonButton from '../../ButtonControllers/CommonButton';

import { ReactComponent as EuroIcon } from '../../../assets/img/icons/euro.svg'
import { datePickerCustomHeaderRender } from '../../CommonUtils/CommonUtils';
import DatePicker from 'react-datepicker';
export default function CreateInvoiceForm(props) {
    const closeModal = props.closeModal
    const [initialTableRowData, setInitialTableRowData] = useState(
        [
            {
                id: '1',
                description: 'NHS',
                createdDate: '11-11-21',
                treatmentDate: '11-11-21',
                total: 40,
                checkbox: ''
            },
        ]
    )
    const bankAccount = ['Select']
    const patientThirdPartyReceipt = ['Select']
    const addOtherThirdParties = ['Select']
    const [date, setDate] = useState(new Date())
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <Formik
            initialValues={{
                selectedRows: [],
                bankAccount: '',
                notes: '',
                markAsSent: false,
                markAsWritten: false,
                patientThirdPartyReceipt: '',
                addOtherThirdParties: '',

            }}
            onSubmit={(values) => {
                let combinedValues = {
                    ...values,

                }
                console.log(combinedValues)
                /*fetch(pv.CREATE_INVOICE_API, {
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
                    <div className="selectCharges">
                        <div className="sectHeader">
                            Select Charges
                        </div>

                        <table className="_table">

                            <thead>
                                <tr className="th-row">
                                    <th className="clmn-15">Description</th>
                                    <th className="clmn-20">Created Date</th>
                                    <th className="clmn-20">Treatment Date</th>
                                    <th className="clmn-30">Total</th>
                                    <th className="clmn-15"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialTableRowData.map((row, index) => {
                                    return (
                                        <tr key={`${index}__createInvoice_TableRow`}>
                                            <td className="clmn-15">{row.description}</td>
                                            <td className="clmn-20">{row.createdDate}</td>
                                            <td className="clmn-20">{row.treatmentDate}</td>
                                            <td className="clmn-30">{row.total} <EuroIcon style={{ marginBottom: '0.3rem', height: '.8rem', width: '.7rem' }} /> </td>
                                            <td className="clmn-15">
                                                <label>
                                                    <Field
                                                        type="checkbox"
                                                        name="selectedRows"
                                                        className="checkbox"
                                                        value={row.id}
                                                    />
                                                    <span></span>
                                                </label>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <td className="total" colSpan={5}>
                                    Total: {initialTableRowData.reduce((accumulator, current) => accumulator + current.total, 0)} <EuroIcon style={{ marginBottom: '0.2em', height: '.7em', width: '.6em' }} />
                                </td>
                            </tfoot>
                        </table>
                    </div>

                    <div className="editInvoice">
                        <div className="sectHeader">
                            Edit Invoice Details:
                        </div>

                        <div className="flex">
                            <div className="field-wrapper">
                                <div className="field-wrapper">
                                    <DatePicker
                                        required
                                        className="field"
                                        selected={date}
                                        renderCustomHeader={datePickerCustomHeaderRender}
                                        onChange={(date) => setDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        customInput={<CustomDatePickerField />}
                                    />
                                    <span>Date (dd-mm-yyyy)*:</span>
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="bankAccount">
                                    {bankAccount.map((item, index) => <option value={item} key={`${index}__createInvoice_bankAcount`} >{item}</option>)}
                                </Field>
                                <span>Bank account for billing:</span>
                            </div>
                        </div>
                        <div className="flex flex_50 form-row-mb form-row_note ">
                            <div className="field-wrapper flex-grow">
                                <Field
                                    className="field field_100 field_textarea"
                                    component="textarea"
                                    name="notes"
                                    placeholder="Notes" />
                            </div>
                        </div>
                    </div>

                    <div className="thirdParty">
                        <div className="sectHeader">
                            Third Party
                        </div>
                        <div className="flex frst-row">
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="patientThirdPartyReceipt">
                                    {patientThirdPartyReceipt.map((item, index) => <option value={item} key={`${index}__createInvoice_bankAcount`} >{item}</option>)}
                                </Field>
                                <span>Patient Third Party Receipt:</span>
                            </div>
                            <div className="field-wrapper">
                                <Field
                                    className="field field_select"
                                    component="select"
                                    name="addOtherThirdParties">
                                    {addOtherThirdParties.map((item, index) => <option value={item} key={`${index}__createInvoice_bankAcount`} >{item}</option>)}
                                </Field>
                                <span>Add other Third Parties:</span>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="field-wrapper">
                                <Field
                                    className="field"
                                    component="input"
                                    name="forTheAttentionOf"
                                    style={{ width: '386px' }}
                                />
                                <span>For The Attention Of (Custom Invoice):</span>
                            </div>
                        </div>
                        <div className="flex">
                            <label>
                                <Field
                                    type="checkbox"
                                    name="markAsSent"
                                    className="checkbox"
                                />
                                <span>Mark As Sent</span>
                            </label>
                        </div>
                        <div className="flex">
                            <label>
                                <Field
                                    type="checkbox"
                                    name="markAsWritten"
                                    className="checkbox"
                                />
                                <span>Mark As Written Of (Bad)</span>
                            </label>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <div className="frst-row">
                            <CommonButton text="Save & Email Invoice" handler={() => { }} customClass="button_green" />
                            <CommonButton text="Save & Print " handler={() => { }} customClass="button_green" />
                            <CommonButton text="Save & Create Payment" handler={() => { }} customClass="button_accent" />
                        </div>
                        <div className="scnd-row">
                            <SubmitButton text="Save" />
                            <CancelButton handler={closeModal} />
                        </div>
                    </div>
                </Form>
            )}


        </Formik>
    )
}