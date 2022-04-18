import React from 'react'

import ListAllPatient from './listAll'

export default function PatientDayListPatient() {

    return (
        <div className="patientDayList">
            <ListAllPatient date={new Date()} title="Patient Day List" />
        </div>
    );
}

