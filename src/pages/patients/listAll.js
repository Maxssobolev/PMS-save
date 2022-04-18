import React, { useState } from 'react'

import "tabulator-tables/dist/css/tabulator.min.css";
import '../../assets/scss/myTabulator.scss'
import { ReactTabulator, reactFormatter } from "react-tabulator";
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Actions from '../../components/Actions';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const initialRowData = [
    {
        sex: 'Mr',
        firstName: 'Max',
        lastName: 'Sobolev',
        dob: '2002/07/02',
        address: 'Petersburg',
        homeTel: '',
        mobileTel: '',
        email: '',
        lastApptLocation: '',
        group: 'medico-legal',
        insuranceCompany: 'insurance Company',
        created: '',
        id: 10,
        actions: ''
    },
    {
        sex: 'Mr',
        firstName: 'Sergey',
        lastName: 'Sobolev',
        dob: '2002/07/02',
        address: 'Petersburg',
        homeTel: '',
        mobileTel: '',
        email: '',
        lastApptLocation: '',
        group: 'fcp',
        insuranceCompany: 'insurance Company',
        created: '',
        id: 10,
        actions: ''
    }
]

function ListAllPatient(props) {
    const menu = useSelector(state => state.menu)
    const patientGroupSelect = ['All', 'Private Patients', 'NHS patients', 'Medico-legal', 'Private Healthcare Insurance', 'Social Prescribing', 'FCP']
    const [patientGroup, setPatientGroup] = useState('All')

    const [rowData, setRowData] = useState(initialRowData)


    //selector
    const selectShowEntries = [10, 25, 50, 100]
    //-------

    //table
    function ActionsGroup(props) {    // your React Component to use in a cell
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;

        return <Actions
            id={id}
            //wich actions need to be included:
            moreOptions
            bookNewAppointment
            editDetails
        />;
    }
    const columns = [
        { title: '', field: 'sex', width: 10, headerSort: false, },
        { title: 'First Name', field: 'firstName', },
        { title: 'Last Name', field: 'lastName', },
        { title: 'DOB', field: 'dob', headerSort: false, },
        { title: 'Address', field: 'address', },
        { title: 'Home Tel', field: 'homeTel', },
        { title: 'Mobile Tel', field: 'mobileTel', },
        { title: 'Email', field: 'email', },
        { title: "LastAppt. Location", field: 'lastApptLocation', headerSort: false, },
        { title: 'Group', field: 'group', headerSort: false, },
        { title: 'Insurance Company', field: 'insuranceCompany', },
        { title: 'Created', field: 'created', },
        { title: 'ID', field: 'id', width: 50 },
        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatterParams: (cell) => ({ id: cell.getData().id }),
            formatter: reactFormatter(<ActionsGroup />)
        },

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
        <div className="listAll">
            <section className="header-section">
                <h1 className="page-header">{props.title ? props.title : 'Patients List'}</h1>
            </section>

            <section>
                <div className="widget-block" style={{ paddingTop: '32px' }}>
                    <div className="flex flex_align-center">
                        <div className={`flex flex_align-center ${menu.isMobile ? 'flex_space-between' : null}`} style={menu.isMobile ? { width: '100%' } : null}>
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
                                    {patientGroupSelect.map((val) => <option value={val} key={`${val}__patientGroupSelect`}>{val}</option>)}
                                </select>
                                <span>Patient Group:</span>
                            </div>
                            <button type="button" className="button button_submit" style={menu.isMobile ? { maxWidth: '176px', padding: '0 24px', marginLeft: '0' } : { maxWidth: '196px', padding: '0 44px', marginLeft: '44px' }}>
                                <Link to="/patients/addNew" style={{ color: 'inherit' }}> Add new patient </Link>
                            </button>
                        </div>
                        <div>

                            <Search
                                placeholder="Search patients"
                                customStyle={menu.isMobile ?
                                    {
                                        flexGrow: '1',
                                        width: '100%',
                                        marginTop: '16px'
                                    }
                                    :
                                    {
                                        height: '44px',
                                        flexGrow: 'initial'
                                    }}
                                data={initialRowData}
                                term={term}
                                update={update}
                                searchField='firstName'
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
            </section>


        </div >
    );
}


const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps)(ListAllPatient)
