import React, { useState } from 'react'
import '../assets/scss/pages.scss'
import TableWidthSearchAndPagination from '../components/TableWidthSearchAndPagination/TableWidthSearchAndPagination';

export default function DirectoryPage() {

    const [initialRowData, setInitialRowData] = useState([
        {
            id: '1',
            firstName: 'Will',
            lastName: 'Bateman',
            jobTitle: 'Senior Physiotherapist',
            email: 'will@surreyphysio.co.uk	',
            nhsEmail: 'will.bateman@nhs.net',
            landingPhone: '02086856930',
            mobilePhone: '07868011440',
            roleSkills: 'First Contact Practitioner',
            profRegNo: 'HCPC: PH122888 CSP: 110005 DBS: 001714793653',
            location: 'Selsdon House',
            emergencyContact: 'Aaron Prema 07964 910525',
        },
    ])
    const columns = [
        { title: 'First Name', field: 'firstName', widthGrow: 0.7 },
        { title: 'Last Name', field: 'lastName', widthGrow: 0.7 },
        { title: 'Job Title', field: 'jobTitle', widthGrow: 0.7 },
        { title: 'Email', field: 'email', widthGrow: 0.7 },
        { title: 'NHS Email', field: 'nhsEmail', widthGrow: 1 },
        { title: 'Landing Phone', field: 'landingPhone', widthGrow: 1 },
        { title: 'Mobile Phone', field: 'mobilePhone', widthGrow: 1 },
        { title: 'Role/Skills', field: 'roleSkills', widthGrow: 1 },
        { title: 'Prof. Reg. No.', field: 'profRegNo', widthGrow: 1 },
        { title: 'Location', field: 'location', widthGrow: 1 },
        { title: 'Emergency Contact', field: 'emergencyContact', widthGrow: 1 },
    ]

    return (
        <div className="page page-directory">
            <section className="header-section">
                <h1 className="page-header">Directory</h1>
            </section>

            <div className="widget-block">
                <TableWidthSearchAndPagination
                    initialRowData={initialRowData}
                    columns={columns}
                    customSearchWrapperClass="_search"
                    searchField="lastName"
                    searchPlaceholder="Search"

                />
            </div>
        </div>
    );
}

