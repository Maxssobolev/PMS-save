import React from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { ReactComponent as AutoPatientIcon } from '../../assets/img/icons/user_BLUE.svg'
import '../../assets/scss/fuzzySelector.scss'

export default function SelectPatient(props) {

    const patientsList = [
        { name: 'Aaron Denham', value: 'Aaron Denham' },
        { name: 'Mirko Lucic', value: 'Mirko Lucic' },
        { name: 'Alex Poulton', value: 'Alex Poulton' },
        { name: 'Emma Stevenson', value: 'Emma Stevenson' },
        { name: 'Garry Purnell', value: 'Garry Purnell' },
        { name: 'Jake Rogers', value: 'Jake Rogers' },
        { name: 'Lucy Sonson', value: 'Lucy Sonson' },
        { name: 'Martin Brodzinski', value: 'Martin Brodzinski' },
        { name: 'Niamh Wright', value: 'Niamh Wright' },

    ] //load?

    if (props.onlySearch == true) {
        return (
            <div className={props.customClass}>
                <SelectSearch
                    options={patientsList}
                    search={true}
                    filterOptions={fuzzySearch}
                    emptyMessage="Not found"
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={(val) => props.change(val)}
                />
            </div>
        )
    }
    else {
        return (
            <div className={props.customClass}>
                <SelectSearch
                    options={patientsList}
                    search={true}
                    filterOptions={fuzzySearch}
                    emptyMessage="Not found"
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={(val) => props.change(val)}
                />
                <button type="button" className='autoPatient' >
                    <AutoPatientIcon />
                </button>
            </div>
        )
    }
}