import React, { useState } from 'react'
import styles from './Messages.module.scss'


import "tabulator-tables/dist/css/tabulator.min.css";
import '../../../../../assets/scss/myTabulator.scss'
import { ReactTabulator } from "react-tabulator";

import Search from '../../../../Search/Search'


import { initialRowData } from './MessagesTESTROWS';

export default function Messages(props) {
    const [rowData, setRowData] = useState(initialRowData)

    const serverParametrs = props.serverParametrs

    //selector
    const [filterSelector, setFilterSelector] = useState('All Users')
    const filterSelectorOptions = ['All Users'] //load ?
    //--------

    //selector
    const selectShowEntries = [10, 25, 50, 100]
    //-------


    //table
    const columns = [
        { title: 'Subject', field: 'subject', widthGrow: 1 },
        { title: 'Patient', field: 'patient', widthGrow: 1 },
        { title: 'Message', field: 'message', widthGrow: 4 },
        { title: 'Sent By', field: 'sentBy', widthGrow: 1 },
        { title: 'Sent Date', field: 'sentDate', widthGrow: 1 },
        { title: 'Actions', field: 'actions', widthGrow: 1 },
    ]
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

    //-------

    return (
        <div className="modal-content">

            <div className="flex flex_space-between top-menu">
                <div className="anotherTitle">List</div>
                <div className="flex top-controllers">
                    <div className="select">
                        <select
                            name="filterSelector"
                            className={`field ${styles.field_select}`}
                            onChange={(e) => {
                                setFilterSelector(e.target.value)
                            }}>
                            {filterSelectorOptions.map((val) => <option value={val} key={`${val}__filterSelectorOptions`}>{val}</option>)}
                        </select>
                    </div>
                    <div className={styles.search}>
                        <Search
                            placeholder="Search"
                            customClasses={styles.input_search}
                            data={initialRowData}
                            term={term}
                            update={update}
                            searchField='subject'
                        />
                    </div>
                </div>
            </div>

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

        </div>
    )
}