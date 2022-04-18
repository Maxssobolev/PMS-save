import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react'
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import '../../assets/scss/pages.scss'
import Search from '../../components/Search/Search';

import SubPageRenderer from '../sub-page-renderer';

export default function DiaryPage() {

    let match = useRouteMatch();

    return (
        <div className="page page-training">
            <Switch>
                <Route path={`${match.path}/:subcomponent`} component={SubPageRenderer} />
                <Route path="/"> <Index /> </Route>
            </Switch>
        </div>
    );
}


const Index = () => {

    const [trainingData, setTrainingData] = useState([
        { title: 'SomeTraining Title', id: 1 },
        { title: 'AnotherTraining Title', id: 2 }
    ])

    const [searchedData, setSearchedData] = useState(trainingData)
    const [term, setTerm] = useState('')
    const searching = ({ term, data }) => {
        setTerm(term)
        setSearchedData(data)
    }
    return (
        <>
            <section className="header-section">
                <h1 className="page-header">
                    FCP Roadmap Stage 1 - Part 1 (Statutory And Mandatory Training)
                </h1>
            </section>
            <div className="widget-block">

                <div className="search-section">
                    <Search
                        placeholder="Search"
                        data={trainingData}
                        term={term}
                        update={searching}
                        searchField="title"
                    />
                </div>
                <Formik
                    initialValues={{
                        complete: false,
                        note: ''
                    }}
                >
                    {(props) => (
                        <Form>
                            <div className="message">
                                <p>As the first part of stage 1 of the FCP Roadmap, you should have completed your Statutory and Mandatory Training.</p>
                                <p>Please go to <Link to="/tools"> https://pms.surreyphysio.co.uk/tools/checklist?id=2 </Link> and complete this section. </p>
                            </div>
                            <div className="message message_confirm">
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="complete"
                                        className="checkbox"
                                    />
                                    <span>I have completed the Statutory and Mandatory Training as detailed here:</span>
                                </label>
                                <p><Link to="/tools"> https://pms.surreyphysio.co.uk/tools/checklist?id=2 </Link></p>
                            </div>

                            <div className="flex flex_50 form-row-mb form-row_note ">
                                <div className="field-wrapper flex-grow">
                                    <Field
                                        className="field field_100 field_textarea"
                                        component="textarea"
                                        name="note"
                                        placeholder="Note" />
                                </div>
                            </div>
                        </Form>
                    )}

                </Formik>

            </div >
        </>
    )
}
