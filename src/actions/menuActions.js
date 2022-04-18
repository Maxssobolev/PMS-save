import {
    GET_SIDEMENU_STATE,
    OPEN_SIDEMENU,
    CLOSE_SIDEMENU
} from './types'

export const getSideMenuState = () => {
    return {
        type: GET_SIDEMENU_STATE
    }
}

export const openSideMenu = () => {
    return {
        type: OPEN_SIDEMENU,
        payload: {
            isOpen: true
        }
    }
}

export const closeSideMenu = () => {
    return {
        type: CLOSE_SIDEMENU,
        payload: {
            isOpen: false
        }
    }
}

export const toggleSideMenu = () => (dispatch, getState) => {
    const { isOpen, isMobile } = getState().menu
    isOpen ? dispatch(closeSideMenu()) : dispatch(openSideMenu())
    let sideMenu = document.getElementsByClassName("sideMenu")[0]
    console.log(window.matchMedia("(max-width: 425px)").matches)
    if (isMobile) {
        sideMenu.classList.toggle("mobileMenuOpen")
    } else {
        sideMenu.classList.toggle("menuHidden")//for mobiles it for Open state
    }
}