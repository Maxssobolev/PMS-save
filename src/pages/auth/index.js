import React from 'react'
import { Switch, Route } from 'react-router-dom';
import '../../assets/scss/pages.scss'
import Footer from '../../components/Footer/Footer';
import LoginAuth from './login';

export default function AuthPage() {

    return (
        <>
            <div className="page page-auth">
                <Switch>
                    <Route path={`/auth/login`} component={LoginAuth} />
                </Switch>

            </div>
            <Footer />
        </>
    );
}
