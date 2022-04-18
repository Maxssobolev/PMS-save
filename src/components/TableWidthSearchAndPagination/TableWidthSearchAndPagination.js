import React, { useEffect, useState } from 'react'
import { ReactTabulator } from 'react-tabulator'
import Search from '../Search/Search'
import "tabulator-tables/dist/css/tabulator.min.css";
import '../../assets/scss/myTabulator.scss'


/*
*   Принимает initialRowData - с обьектом строк
*             columns - с обьектом столбцов
*             customSearchWrapperClass - класс обертки над полем поиска
*             customSearchInputClass - класс поля поиска
*             searchField - столбец, по которому нужно осуществлять поиск
*/

export default function TableWidthSearchAndPagination(props) {
    const initialRowData = props.initialRowData
    const [rowData, setRowData] = useState(initialRowData)

    //подписываемся на изменение initialState (используется для удаления)
    useEffect(() => {
        setRowData(initialRowData)
        setConfig((prev) => ({
            ...prev,
            data: initialRowData
        }))
    }, [initialRowData])

    const columns = props.columns

    //selector
    const selectShowEntries = [10, 25, 50, 100]
    //-------

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
    return (
        <div className="listAllContent">
            {props.searchField &&
                <div className={props.customSearchWrapperClass}>
                    <Search
                        placeholder={props?.searchPlaceholder != undefined ? props?.searchPlaceholder : "Search patients"}
                        customClasses={props?.customSearchInputClass}
                        data={initialRowData}
                        term={term}
                        update={update}
                        searchField={props.searchField}
                    />
                </div>
            }


            {/* TABLE */}
            {props?.showEntries != false &&
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
                                key={`${val}__itemsPerPageContactsList`}
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
            }
            <ReactTabulator {...config} />

        </div>
    )
}