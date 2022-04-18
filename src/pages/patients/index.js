import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import '../../assets/scss/pages.scss'

import SubPageRenderer from '../sub-page-renderer';


export default function PatientsPage() {
    let match = useRouteMatch();

    return (
        <div className="page page-patients">
            <Switch>
                <Route path={`${match.path}/:subcomponent`} component={SubPageRenderer} />
            </Switch>
        </div>
    );
}

