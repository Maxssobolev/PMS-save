import axios from 'axios'
import { pv } from '../projectVars/'

import { returnErrors } from './errorActions'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types'

//check token and load user
export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({ type: USER_LOADING })

    axios.get('/api/user', tokenConfig(getState))
        //if OK
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        //else
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR,
            })
        })
}


//setup config/headers and token
export const tokenConfig = getState => {
    //get token from localstorage (which is a part of state auth)
    const token = getState().auth.token

    //Headers
    const config = {
        headers: {
            'ContentType': 'application/json'
        }
    }

    //if token, add headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config
}