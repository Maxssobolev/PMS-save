import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Названия файлов, содержащих страницы, должны быть написаны строчными буквами
//Файлы со страницами должны лежать в папке ./pages
import PageRenderer from './page-renderer';
import SubPageRenderer from './pages/sub-page-renderer'
import './assets/scss/main.scss'

//modules
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';


import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/authActions';
import AuthPage from './pages/auth';

export default function AppRouted() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)
  const token = localStorage.getItem('token') !== null

  useEffect(() => {
    if (!token)
      dispatch(loadUser())
  }, [dispatch])


  return (
    <>
      {user.token && <SideMenu />}
      {user.token && <TopMenu />}

      <Switch>
        {user.token && <Route path="/:page" component={PageRenderer} />}
        {user.token ?
          <Route path="/" render={() => <Redirect to="/home" />} />
          :

          <>
            <Route path="/*" render={() => <Redirect to="/auth/login" />} />
            <Route path='/auth/login' render={() => <AuthPage />} />
          </>

        }
        <Route component={() => 404} />
      </Switch>
      {user.token && <Footer />}
    </>
  );

}
