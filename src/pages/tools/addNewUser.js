import React from 'react'
import AddNewUserForm from "../../components/Forms/AddNewUserForm/AddNewUserForm";

export default function AddNewUserTools() {


    return (
        <div className="addNewUser">
            <section className="header-section">
                <h1 className="page-header">Add New User</h1>
                <div className="header-section__message">Don’t forget to send a letter to a new user!</div>

            </section>

            <section>
                <div className="widget-block" style={{maxWidth: '820px'}}>
                    <AddNewUserForm />
                </div>
            </section>
        </div>
    );
}

