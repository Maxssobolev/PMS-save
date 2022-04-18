import React, { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StatiscticGraph from "../StatiscticGraph/StatiscticGraph";
/*
*
* COMMON CHART
*
*
*/

export default function StatisticsWidget({ width, height, wrapperRef }) {
    const fromToByVertical = [-1, 1] // set by load
    const [startDate, setStartDate] = useState(new Date());
    const data =
        [
            //можно считать, что name, value = x, y
            { name: 'Jan', value: 0.2 },
            { name: 'Feb', value: 0.1 },
            { name: 'Mar', value: -1 },
        ]


    //Это все будет подгружаться из API?
    const toShow = [
        "Income/revenue",
        'Number of patients',
        'New patient number',
        '1s and 2s number',
        'DNA rates'
    ]
    const [toShowSelect, setToShowSelect] = useState(toShow[0]);

    const practitioner = [
        'Andrew Dev',
    ]
    const [practitionerSelect, setPractitionerSelect] = useState(practitioner[0]);


    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick }, ref) => (
        <input className="field field_datepicker" onClick={onClick} ref={ref} defaultValue={value} />
    ));


    let handleSelectChange = (event, selectField) => {
        switch (selectField) {
            case 'toShow':
                setToShowSelect(event.target.value);
                break
            case 'practitioner':
                setPractitionerSelect(event.target.value);
                break
        }

    }


    return (
        <div className="widget-block">
            <div className="block-header block-header_mediumSize ">
                Statistics
            </div>
            <div className="controllers">
                <div className="field-wrapper toShowSelect">
                    <select
                        className="field field_select"
                        onChange={function (event) { handleSelectChange(event, 'toShow') }}>
                        {toShow.map((opt, index) => {
                            return (
                                <option value={opt} key={`${index}_toShowOpt`}>
                                    {opt}
                                </option>
                            );
                        })}
                    </select>
                    <span>To show:</span>
                </div>

                <div className="field-wrapper practitionerSelect">
                    <select
                        className="field field_select"
                        onChange={function (event) { handleSelectChange(event, 'practitioner') }}>
                        {practitioner.map((opt, index) => {
                            return (
                                <option value={opt} key={`${index}_practitionerOpt`}>
                                    {opt}
                                </option>
                            );
                        })}
                    </select>
                    <span>Practitioner</span>
                </div>

                <div className="field-wrapper">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM.yyyy"
                        showMonthYearPicker
                        customInput={<CustomDatePickerField />}
                    />
                    <span>Range</span>
                </div>
            </div>
            <div className="block-header block-header_darkblue ">
                {toShowSelect}
            </div>

            <StatiscticGraph data={data} width={width} height={height} fromToByVertical={fromToByVertical} wrapperRef={wrapperRef} />
        </div>
    )
}