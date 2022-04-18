import React, { useState } from 'react'
import TableWidthSearchAndPagination from "../../TableWidthSearchAndPagination/TableWidthSearchAndPagination";
import { reactFormatter } from "react-tabulator";
import Actions from "../../Actions";
import CommonButton from '../../ButtonControllers/CommonButton';

export default function PatientOccupations(props) {


    const handleDelete = (id, location, local) => {
        //(db query).then()
        setInitialRowData((prev) => prev.filter((itm) => itm.id != id))
        setSortedRowData((prev) => prev.filter((itm) => itm.id != id))
    }
    function ActionsGroup(props) {
        const cellData = props.cell._cell.row.data;
        const id = cellData.id;
        return <Actions
            id={id}
            local='inputFields/patientOccupationsTab'
            editDetails customHandlerEditDetails={() => { }}
            delete handlerDelete={handleDelete}
        />;
    }
    const [initialRowData, setInitialRowData] = useState([
        {
            id: 1,
            occupations: 'ABDOMEN/CORE',
            created: '23-10-2018 21:37',
            lastModified: '23-10-2018 21:37',
            actions: ''
        },
        {
            id: 2,
            occupations: 'BALL',
            created: '23-10-2018 21:37',
            lastModified: '23-10-2018 21:37',
            actions: ''
        },
    ]) //here it will load
    const [sortedRowData, setSortedRowData] = useState(initialRowData)
    const columns = [
        { title: 'Occupations', field: 'occupations', headerSort: false },
        { title: 'Created', field: 'created', headerSort: false },
        { title: 'Last Modified	', field: 'lastModified', headerSort: false },

        {
            title: 'Actions', field: 'actions', width: 80, headerSort: false,
            formatter: reactFormatter(<ActionsGroup />)
        },
    ]
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const sortByLetter = letter => {
        setSortedRowData(
            initialRowData.filter(item => item.occupations[0].toLowerCase() == letter)
        )
    }
    return (
        <div className="tab-component patientOccupations">
            <div className="tab-component-header">
                <div className="header">
                    Patient Occupations
                </div>
                <CommonButton text="Add new" handler={() => { }} customClass="button_accent" />
            </div>
            <div className="controllers">
                {letters.map((letter) => (
                    <button className="btn-letter" onClick={() => sortByLetter(letter)}>{letter.toUpperCase()}</button>
                ))}
            </div>

            <TableWidthSearchAndPagination
                columns={columns}
                initialRowData={sortedRowData}
                showEntries={false}
            />
        </div>
    )
}