import {
    GET_SIDEMENU_STATE,
    OPEN_SIDEMENU,
    CLOSE_SIDEMENU
} from '../actions/types'
const isMobile = window.matchMedia("(max-width: 425px)").matches
const initialState = {
    isOpen: isMobile ? false : true,
    isMobile: isMobile
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SIDEMENU_STATE:
            return {
                isOpen: state.isOpen,
                isMobile: state.isMobile
            }
        case OPEN_SIDEMENU:
        case CLOSE_SIDEMENU:
            return {
                isOpen: action.payload.isOpen,
                isMobile: state.isMobile
            }
        default:
            return state
    }
}