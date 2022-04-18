import React, { forwardRef } from 'react'
import { useAccordionButton, Accordion, Card } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { Field } from 'formik'
function CustomToggleButton({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, (e) => {
        e.target.classList.toggle('button-accordion-clicked')

        if (e.target.innerText == e.target.getAttribute('textbeforeclicked')) {
            e.target.innerText = e.target.getAttribute('textafterclicked')
        } else {
            e.target.innerText = e.target.getAttribute('textbeforeclicked')
        }
    }
    );

    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className='button button_blue'
            textbeforeclicked='Repeat'
            textafterclicked='Do Not Repeat'
        >
            Repeat
        </button>
    );
}

export default function BookNewAppointmentRepeat(props) {
    const isMobile = props.isMobile
    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass, myPlaceholder }, ref) => (
        <><input className={`field field_datepicker ${addclass}`} onClick={onClick} ref={ref} defaultValue={value ? value : myPlaceholder} /> </>
    ));

    return (
        <>


            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomToggleButton eventKey="0" />
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="repeat-content">
                                <div className="flex mb">
                                    <div className="field-wrapper">
                                        <Field
                                            className="field field_select"
                                            component="select"
                                            name="basis">
                                            {props.data.basis.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_basis`}>{item}</option>)}
                                        </Field>

                                    </div>
                                    {isMobile && <div className="field-wrapper">
                                        <DatePicker
                                            required
                                            selected={props.data.until.until}
                                            onChange={(date) => props.data.until.update(date)}
                                            dateFormat="dd.MM.yyyy"
                                            customInput={<CustomDatePickerField myPlaceholder="Select" />}
                                        />
                                        <span>Until:</span>
                                    </div>}
                                </div>
                                <div className="flex ">
                                    {!isMobile && <div className="field-wrapper">
                                        <DatePicker
                                            required
                                            selected={props.data.until.until}
                                            onChange={(date) => props.data.until.update(date)}
                                            dateFormat="dd.MM.yyyy"
                                            customInput={<CustomDatePickerField myPlaceholder="Select" />}
                                        />
                                        <span>Until:</span>
                                    </div>}
                                    <div className="field-wrapper">
                                        <Field
                                            className="field field_select"
                                            component="select"
                                            name="endsIn">
                                            {props.data.endsIn.endsInSelect1.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_endsIn`}>{item}</option>)}
                                        </Field>
                                        <span>Ends in:</span>
                                    </div>
                                    <div className="field-wrapper">
                                        <Field
                                            className="field field_select"
                                            component="select"
                                            name="endsIn2 ">
                                            {props.data.endsIn.endsInSelect2.map((item, index) => <option value={item.value} key={`${index}__bookNewAppointment_endsIn2`}>{item}</option>)}
                                        </Field>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>



        </>
    )
}