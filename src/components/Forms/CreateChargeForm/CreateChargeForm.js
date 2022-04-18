import React, { forwardRef, useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import SubmitButton from '../../ButtonControllers/SubmitButton';
import CancelButton from '../../ButtonControllers/CancelButton';
import { paymentMethod } from '../vars';
import DatePicker from 'react-datepicker';
import { pv } from '../../../projectVars' //projectVariables
import CommonButton from '../../ButtonControllers/CommonButton';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { ReactComponent as EuroIcon } from '../../../assets/img/icons/euro-gray.svg'
import { roundNumber } from '../../CommonUtils/CommonUtils';


export default function CreateChargeForm(props) {

    const rowData = props?.rowData || {}
    const closeModal = props.closeModal
    const diaryUser = ['Aalon Red', 'Glen Wilkson', 'Another']
    const outstandingCharges = 71.89 //load??

    //SELECT DESCR
    const initialDesc = [
        { name: 'NHS', value: 'NHS' },
        { name: 'LLL', value: 'LLL' },
        { name: 'BBBB', value: 'BBBB' },
    ]
    const descriptions =
        rowData?.description != '' ?
            [
                { name: rowData?.description, value: rowData?.description },
                ...(initialDesc.filter((itm) => itm.name != rowData?.description)) // чтобы не было повторений
            ]
            :
            initialDesc
    const [description, setDescription] = useState()
    //--------------

    const [date, setDate] = useState(
        (rowData?.date != '' && rowData?.date != undefined) ? new Date(rowData.date) : new Date()
    )

    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker field_100 ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));

    return (
        <div className="createChargeForm">
            <Formik
                initialValues={
                    {
                        paymentMethod: '',
                        patient: rowData?.patient,
                        diaryUser: rowData?.diaryUser,
                        date: rowData?.date,
                        type: '', //load??
                        description: rowData?.description,
                        unitCost: 30.81, //load??
                        qty: 1,
                        total: rowData?.total,
                        notes: ''
                    }
                }
                onSubmit={(values) => {

                    let combinedValues = {
                        ...values,
                        date,
                        description
                    }
                    /*fetch(pv.CHARGE_API_CREATE, {
                        method: 'POST',
                        body: JSON.stringify({login, password}) 
                    })
                    .then(data => data.json()).then((r)=> {
                        if (r == 'положительный ответ от сервера')
                            
                    })*/
                }}
            >
                {
                    (props) => {
                        return (
                            <Form>
                                <div className="flex">
                                    <div className="field-wrapper ">
                                        <Field
                                            className="field field_select"
                                            component="select"
                                            name="paymentMethod"

                                        >
                                            {paymentMethod.map((item, index) => <option value={item} key={`${index}__createCharge__paymentMethod`}>{item}</option>)}
                                        </Field>
                                    </div>
                                    <div className="btn-payNow-wrapper">
                                        <CommonButton customClass='button_accent' text="Pay Now" handler={() => { }} />
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="field-wrapper ">

                                        <Field
                                            name='patient'
                                            className='field '
                                            component='input'
                                            disabled={true}
                                        />
                                        <span>
                                            Patinet:
                                        </span>
                                    </div>
                                    <div className="field-wrapper ">
                                        <Field
                                            required
                                            name='diaryUser'
                                            className="field field_select"
                                            component="select"
                                        >
                                            {diaryUser.map((item, index) => <option value={item} key={`${index}__createCharge__diaryUser`}>{item}</option>)}

                                        </Field>
                                        <span>
                                            Diary User*:
                                        </span>
                                    </div>
                                    <div className="field-wrapper ">
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            dateFormat="dd.MM.yyyy"
                                            customInput={<CustomDatePickerField addclass="field_100-pickers" />}
                                        />
                                        <span>Date (dd-mm-yyyy)</span>
                                    </div>

                                </div>
                                <div className="flex">
                                    <div className="field-wrapper ">

                                        <Field
                                            name='type'
                                            className='field '
                                            component='input'
                                            disabled={true}
                                        />
                                        <span>
                                            Type:
                                        </span>
                                    </div>
                                    <div className="field-wrapper flex-grow">
                                        <SelectSearch
                                            required
                                            options={descriptions}
                                            search={true}
                                            filterOptions={fuzzySearch}
                                            emptyMessage="Not found"
                                            name='description'
                                            onChange={(val) => setDescription(val)}
                                        />
                                        <span>Description*:</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="field-wrapper ">
                                        <Field
                                            name='unitCost'
                                            className='field '
                                            component='input'
                                        />
                                        <span>
                                            Unit Cost,  <EuroIcon style={{
                                                width: '1em',
                                                height: '1em',
                                                marginBottom: '0.5em'
                                            }} />:
                                        </span>
                                    </div>

                                    <div className="field-wrapper ">
                                        <Field
                                            required
                                            name='qty'
                                            className='field '
                                            component='input'
                                            type='number'
                                            min={1}
                                        />
                                        <span>
                                            Qty*:
                                        </span>
                                    </div>

                                    <div className="field-wrapper ">
                                        <CalculatedField
                                            id="total"
                                            type="number"
                                            name="total"
                                            defaultValue={props.values.total}
                                            values={props.values}
                                            setFieldValue={props.setFieldValue}
                                            onChange={props.handleChange}
                                            onBlur={props.handleBlur}
                                            className='field '

                                        />
                                        <span>
                                            Total,  <EuroIcon style={{
                                                width: '1em',
                                                height: '1em',
                                                marginBottom: '0.5em'
                                            }} />:
                                        </span>
                                    </div>
                                </div>
                                {outstandingCharges &&
                                    <div className="flex">
                                        <div className="specialMessage">
                                            Outstanding charges:  <EuroIcon style={{
                                                fill: 'rgba(203, 68, 74, 1)',
                                                width: '.7rem',
                                                height: '.7rem',
                                                marginBottom: '0.2em'
                                            }} /> {outstandingCharges}
                                        </div>
                                    </div>
                                }



                                <div className="flex">
                                    <div className="field-wrapper flex-grow">
                                        <Field
                                            className="field field_100 field_textarea"
                                            component="textarea"
                                            name="notes"
                                            placeholder="Notes" />
                                    </div>
                                </div>


                                <div className="btn-wrapper">
                                    <div>
                                        <SubmitButton text="Save & Create Invoice" />
                                        <CancelButton handler={closeModal} />
                                    </div>
                                    <div>
                                        <CommonButton text="Save Charge For Later" customClass="button_accent" handler={() => { }} />
                                    </div>
                                </div>

                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}


const CalculatedField = props => {
    useEffect(() => {
        var val = 0;
        if (props.values.unitCost && props.values.qty) {
            val = roundNumber(props.values.unitCost * props.values.qty, 2)
        }
        props.setFieldValue("total", val);
    }, [props.values]);

    return (
        <input
            id="total"
            type="number"
            name="total"
            defaultValue={props.values.total}
            className={props.className}
            disabled
        />
    );
};