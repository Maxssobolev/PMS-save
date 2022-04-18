import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as LoginIcon } from '../../assets/img/icons/login.svg'
import { useDispatch } from 'react-redux';
export default function LogIn() {
  const dispatch = useDispatch()

  return (
    <Link to={{
      pathname: '/auth/login',
      reason: 'logOut'
    }}
      className="topMenu-nav__item login"
      onClick={() => dispatch({ type: 'LOGOUT_SUCCESS' })}
    >
      <LoginIcon className="login__img" />
      <span className="login__text">Log Out</span>
    </Link>
  );
}

