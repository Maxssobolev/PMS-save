import React from 'react'
import PatientForm from '../../components/Forms/PatientForm/PatientForm';

export default function AddNewPatient() {
    return (
        <div className="addNew">
            <section className="header-section">
                <h1 className="page-header">Add New Patient</h1>
                <div className="header-section__message">Don’t forget to send a letter to a new patient!</div>
            </section>

            <section>
                <div className="widget-block" style={{ paddingTop: '1px' }}>
                    <PatientForm
                        direction='create'
                    />
                </div>
            </section>
        </div>
    );
}

