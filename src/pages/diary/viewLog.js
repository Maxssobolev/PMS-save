import React, { useState } from 'react'

import "tabulator-tables/dist/css/tabulator.min.css";
import '../../assets/scss/myTabulator.scss'
import { ReactTabulator } from "react-tabulator";
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
const initialRowData = [
    {
        date: '23-07-21 13:00',
        type: 'Appointment State',
        patient: 'Jemma Dickens',
        heading: 'E-mail Sending',
        performerUsername: 'michaela@surreyphysio.co.uk',
        attachedUser: 'New e-mail. Sending attempt',
        hiddenDetails: {
            from: 'fromEmma@mail.ru'
        }
    }
]

export default function ViewLogDiary() {
    const patientSelect = ['All', 'Emma Dickens', 'Jemma Dickens']

    const [rowData, setRowData] = useState(initialRowData)
    //selector
    const selectShowEntries = [10, 25, 50, 100]
    //-------

    const columns = [
        { title: 'Date', field: 'date', widthGrow: 1 },
        { title: 'Type', field: 'type', widthGrow: 1 },
        { title: 'Heading', field: 'heading', widthGrow: 1.5 },
        { title: 'Patient', field: 'patient', widthGrow: 1 },
        { title: 'Attached User', field: 'attachedUser', widthGrow: 2 },
        { title: 'Performer Username', field: 'performerUsername', widthGrow: 2 },
    ]

    const [hiddenDetails, setHiddenDetails] = useState(null)

    const [config, setConfig] = useState({
        data: rowData,
        columns,
        layout: "fitColumns",
        options: {
            placeholder: "<span class='noDataAvailable'>No data available in table</span>",
            pagination: 'local',
            paginationSize: 25,
            resizableColumns: false,
            height: '100%',
            rowClick: function (e, row) {
                const rowData = row._row.data
                setHiddenDetails(rowData.patient)
                //How it will be ?

            },

        }
    })
    //-------


    //SEARCH
    const [term, setTerm] = useState('')
    const update = (config) => {
        //in config: term, data (filtred)
        setTerm(config.term)
        setConfig((prev) => ({
            ...prev,
            data: config.data
        }))
    }
    return (
        <div className="viewLog">
            <section className="header-section">
                <h1 className="page-header">Diary Log</h1>
            </section>

            <section>
                <div className="widget-block flex flex_space-between " style={{ paddingTop: '32px' }}>
                    <div className="leftSideArea">
                        <div className="flex flex_align-center">
                            <div className="flex flex_align-center">
                                <div className="field-wrapper">
                                    <select name="patientGroup"
                                        className="field field_select"
                                        onChange={(e) => {
                                            setConfig((prev) => ({
                                                ...prev,
                                                data: e.target.value != 'All' ? initialRowData.filter((itm) => itm.patient.toLowerCase() == e.target.value.toLowerCase()) : initialRowData
                                            }))
                                        }}
                                    >
                                        {patientSelect.map((val) => <option value={val} key={`${val}__patientSelect`}>{val}</option>)}
                                    </select>
                                    <span>Patient:</span>
                                </div>
                            </div>
                            <div className="search-wrapper">

                                <Search
                                    placeholder="Search patients"
                                    customStyle={{
                                        height: '44px',
                                        flexGrow: 'initial'
                                    }}
                                    data={initialRowData}
                                    term={term}
                                    update={update}
                                    searchField='patient'
                                />
                            </div>
                        </div>

                        <section className='table'>
                            <div className="itemsPerPageSelect">
                                <span>Show</span>
                                <select name="itemsPerPage" onChange={(e) => {
                                    setConfig((prev) => ({
                                        ...prev,
                                        options: {
                                            pagination: 'local',
                                            paginationSize: e.target.value
                                        }
                                    }))
                                }}>
                                    {selectShowEntries.map((val) =>
                                        <option
                                            value={val}
                                            key={`${val}__itemsPerPageInstantMessages`}
                                            {...(
                                                val == config.options.paginationSize ?
                                                    { defaultValue: 'yes' }
                                                    :
                                                    null
                                            )}
                                        >{val}</option>)}
                                </select>
                                <span>entries</span>
                            </div>
                            <ReactTabulator {...config} />
                        </section>
                    </div>
                    <div className="rightSideArea">
                        <div className="details-block">
                            <div className="header">
                                Details:
                            </div>
                            <div className="details-content" >
                                {hiddenDetails ? hiddenDetails : <div className="details-placeholder">Choose a record to see details</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

