import React from 'react'
import { Field } from 'formik'


export default function BankDetails(props) {
    const isMobile = window.matchMedia("(max-width: 425px)").matches

    return (
        <div className="formStep formStep-4">
            <div className="mb mt flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="bd_bankName"
                    />
                    <span style={isMobile ? { top: '-200%' } : {}}>
                        Bank name <br />
                        For payroll purposes, please enter the name of the bank where your account is held
                    </span>
                </div>
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="bd_bankBranch"
                    />
                    <span style={isMobile ? { top: '-200%' } : {}}>
                        Bank branch name <br />
                        For payroll purposes, please enter the name of the bank branch where your account is held                    </span>
                </div>

            </div>


            <div className="mb flex">
                <div className="field-wrapper flex-grow">
                    <Field
                        className="field field_100"
                        component="input"
                        name="bd_bankBranchAddress"
                    />
                    <span style={isMobile ? { top: '-200%' } : {}}>
                        Bank branch address <br />
                        For payroll purposes, please enter the name of the bank where your account is held
                    </span>
                </div>
                <div className="field-wrapper flex-grow one-line-span">
                    <Field
                        className="field field_100"
                        component="input"
                        name="bd_bankAccountSortCode"
                    />
                    <span>
                        Bank account sort code
                    </span>
                </div>
            </div>


            <div className="flex">
                <div className="field-wrapper flex-grow two-line-span">
                    <Field
                        className="field "
                        component="input"
                        name="bd_bankAccountNumber"
                        style={{ width: '49%' }}
                    />
                    <span>
                        Bank account number <br />
                        This should be six digits long
                    </span>
                </div>
            </div>
        </div>
    )
}