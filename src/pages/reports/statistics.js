import React, { forwardRef, useState } from 'react'
import StatiscticsBarChart from "../../components/StatisticsBarChart/StatisticsBarChart";
import DatePicker from "react-datepicker";
import CommonButton from "../../components/ButtonControllers/CommonButton";
import CircleDiagram from "../../components/HomePageComponents/CircleDiagram";

export default function StatisticsReports() {
    const isMobile = window.matchMedia("(max-width: 425px)").matches

    return (
        <div className="statistics">
            <section className="header-section">
                <h1 className="page-header">Statistics</h1>
            </section>

            <section>
                <div className="widget-block">
                    <div className="block-header block-header_mediumSize ">
                        Statistics
                    </div>
                    <StatiscticsBarChartWidget isMobile={isMobile} />
                </div>
            </section>

            <section>
                <div className="widget-block" style={{ maxWidth: '660px' }}>
                    <div className="block-header block-header_mediumSize ">
                        Statistics
                    </div>
                    <StatiscticsDiagramWidget />
                </div>
            </section>
        </div>
    );
}


function StatiscticsBarChartWidget(props) {
    const toShowSelect = ['Completed Appointments', 'DNA Appointments', 'Scheduled Time']
    const [toShow, setToShow] = useState('Completed Appointments')
    const [dateFrom, setDateFrom] = useState()
    const [dateTo, setDateTo] = useState()
    const data =
        [
            //можно считать, что name, value = x, y
            { name: 'Tim Allardyce', value: 145 },
            { name: 'Ben  Coffey', value: 70 },
            { name: 'Jorge Bush', value: 155 },
            { name: 'Tim Sauld', value: 35 },
            { name: 'Harry Brown', value: 95 },
            { name: 'Sam Alis', value: 20 },
            { name: 'Michel More', value: 200 },
            { name: 'James Seond', value: 100 },
            { name: 'Corny Down', value: 230 },
            { name: 'Sara Connor', value: 200 },
            { name: 'Vale Dickens', value: 100 },
            { name: 'Luis Litt', value: 230 },
        ]
    const fromToByVertical = [
        //from = min
        //data.reduce((prev, curr) => prev.value < curr.value ? prev : curr).value,
        0,
        //to = max
        data.reduce((prev, curr) => prev.value > curr.value ? prev : curr).value,
    ]

    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker field_100 ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <div className="statisticsBarChart">
            <div className="controllers flex">
                <div className="flex">
                    <div className="field-wrapper toShowSelect">
                        <select
                            className="field field_select"
                            onChange={e => setToShow(e.target.value)}>
                            {toShowSelect.map((opt, index) => {
                                return (
                                    <option value={opt} key={`${index}_toShowOptinReports`}>
                                        {opt}
                                    </option>
                                );
                            })}
                        </select>
                        <span>To show:</span>
                    </div>
                    <div className="field-wrapper">
                        <DatePicker
                            selected={dateFrom}
                            onChange={(date) => setDateFrom(date)}
                            dateFormat="dd.MM.yyyy"
                            customInput={<CustomDatePickerField />}
                        />
                        <span>Date from (dd-mm-yyyy):</span>
                    </div>
                    <div className="field-wrapper">
                        <DatePicker
                            selected={dateTo}
                            onChange={(date) => setDateTo(date)}
                            dateFormat="dd.MM.yyyy"
                            customInput={<CustomDatePickerField />}
                        />
                        <span>Date to (dd-mm-yyyy):</span>
                    </div>
                    {props.isMobile && <div className="flex pdfcsv">
                        <CommonButton text="PDF" handler={() => { }} customClass="button_accent" />
                        <CommonButton text="CSV" handler={() => { }} customClass="button_accent" />
                    </div>}

                </div>
                {!props.isMobile && <div className="flex">
                    <CommonButton text="PDF" handler={() => { }} customClass="button_accent" />
                    <CommonButton text="CSV" handler={() => { }} customClass="button_accent" />
                </div>}

            </div>

            <div className="block-header block-header_darkblue ">
                {toShow}
            </div>
            <div className="statisctics-wrapper">
                <StatiscticsBarChart
                    height={400}
                    data={data}
                    fromToByVertical={fromToByVertical}
                />
            </div>

        </div>
    )
}

function StatiscticsDiagramWidget(props) {
    const toShowSelect = ['Completed Appointments', 'DNA Appointments', 'Scheduled Time']
    const [toShow, setToShow] = useState(toShowSelect[0])
    const [dateFrom, setDateFrom] = useState()
    const [dateTo, setDateTo] = useState()


    //Меняем внешний вид поля DatePicker
    const CustomDatePickerField = forwardRef(({ value, onClick, addclass }, ref) => (
        <input className={`field field_datepicker field_100 ${addclass}`} onClick={onClick} ref={ref} defaultValue={value} />
    ));
    return (
        <div className="statiscticsDiagramWidget">
            <div className="controllers flex">

                <div className="field-wrapper toShowSelect">
                    <select
                        className="field field_select"
                        onChange={e => setToShow(e.target.value)}>
                        {toShowSelect.map((opt, index) => {
                            return (
                                <option value={opt} key={`${index}_toShowOptinReports`}>
                                    {opt}
                                </option>
                            );
                        })}
                    </select>
                    <span>To show:</span>
                </div>
                <div className="field-wrapper">
                    <DatePicker
                        selected={dateFrom}
                        onChange={(date) => setDateFrom(date)}
                        dateFormat="dd.MM.yyyy"
                        customInput={<CustomDatePickerField />}
                    />
                    <span>Date from (dd-mm-yyyy):</span>
                </div>
                <div className="field-wrapper">
                    <DatePicker
                        selected={dateTo}
                        onChange={(date) => setDateTo(date)}
                        dateFormat="dd.MM.yyyy"
                        customInput={<CustomDatePickerField />}
                    />
                    <span>Date to (dd-mm-yyyy):</span>
                </div>



            </div>

            <div className="statisctics-wrapper">
                <CircleDiagram maxVal={3000} current={2342} />
            </div>

        </div>
    )
}