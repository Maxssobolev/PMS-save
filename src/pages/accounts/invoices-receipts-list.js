import React, { useState } from 'react'
import Search from '../../components/Search/Search'
import { ReactTabulator } from 'react-tabulator'
const initialRowData = [
    {
        id: 1,
        no: 42087,
        patient: 'Khokar Assim',
        template: '',
        contactPerson: '',
        contactCompany: '',
        date: '',
        fao: '',
        paid: 'No',
        partPaid: 'No',
        total: 66.03,
        created: '13-09-2021 20:35',
        lastModified: '13-09-2021 20:35',
        performerUsername: 'michaela',
        actions: '',
    },
    {
        id: 1,
        no: 42087,
        patient: 'Khokar Assim',
        template: '',
        contactPerson: '',
        contactCompany: '',
        date: '',
        fao: '',
        paid: 'Yes',
        partPaid: 'No',
        total: 66.03,
        created: '13-09-2021 20:35',
        lastModified: '13-09-2021 20:35',
        performerUsername: 'michaela',
        actions: '',
    },
]
export default function InvoicesReceiptsListAccounts() {
    const groups = ['All Groups']
    const dates = ['All Dates']

    const [rowData, setRowData] = useState(initialRowData)
    //selector
    const selectShowEntries = [10, 25, 50, 100]
    //-------

    const columns = [
        { title: 'No', field: 'no', widthGrow: .4 },
        { title: 'Patient', field: 'patient', widthGrow: .7 },
        { title: 'Template', field: 'template', },
        { title: 'Contact Person', field: 'contactPerson', },
        { title: 'Contact Company', field: 'contactCompany', },
        { title: 'Date', field: 'date', widthGrow: .6 },
        { title: 'FAO', field: 'fao', widthGrow: .5 },
        { title: 'Invoice Sent', field: 'invoiceSent', widthGrow: .6 },
        { title: 'Paid', field: 'paid', widthGrow: .5 },
        { title: 'Part Paid', field: 'partPaid', widthGrow: .4 },
        { title: 'Total', field: 'total', widthGrow: .5 },
        { title: 'Created', field: 'created', },
        { title: 'Last Modified', field: 'lastModified', },
        { title: 'Performer Username', field: 'performerUsername', },
        { title: 'Actions', field: 'actions', widthGrow: .5 },
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

    return (
        <div className="invoices-receipts-list">
            <section className="header-section">
                <h1 className="page-header">Invoices List</h1>
            </section>
            <div className="widget-block">
                <div className="flex flex_align-center flex_space-between top-controllers">
                    <div className="flex flex_align-center">
                        <div className="field-wrapper">
                            <select name="patientGroup"
                                className="field field_select"
                                onChange={(e) => {
                                    setConfig((prev) => ({
                                        ...prev,
                                        data: e.target.value != 'All' ? initialRowData.filter((itm) => itm.group.toLowerCase() == e.target.value.toLowerCase()) : initialRowData
                                    }))
                                }}
                            >
                                {groups.map((val) => <option value={val} key={`${val}__groups`}>{val}</option>)}
                            </select>
                            <span>Groups:</span>
                        </div>
                        <div className="field-wrapper">
                            <select name="patientGroup"
                                className="field field_select"
                                onChange={(e) => {
                                    setConfig((prev) => ({
                                        ...prev,
                                        data: e.target.value != 'All' ? initialRowData.filter((itm) => itm.patientName.toLowerCase() == e.target.value.toLowerCase()) : initialRowData
                                    }))
                                }}
                            >
                                {dates.map((val) => <option value={val} key={`${val}__patientSelect`}>{val}</option>)}
                            </select>
                            <span>Dates:</span>
                        </div>
                        <div className="field-wrapper">
                            <div className="unpaid">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="unpaidOnly"
                                        className="checkbox"
                                        onChange={(e) => {
                                            setConfig((prev) => ({
                                                ...prev,
                                                data: e.target.checked ? initialRowData.filter((itm) => itm.paid.toLowerCase() == 'no') : initialRowData
                                            }))
                                        }}
                                    />
                                    <span>Show unpaid only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Search
                            placeholder="Search"
                            customStyle={{
                                height: '44px',
                                flexGrow: 'initial',
                                margin: '0'
                            }}
                            data={initialRowData}
                            term={term}
                            update={update}
                            searchField='patient'
                        />
                    </div>
                </div>
                <section className='_table'>
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
        </div>
    );
}

