import React, { useEffect } from 'react'
import Search from '../Search/Search'
import LogIn from '../LogIn/LogIn'

import { quickLinks } from './quickLinks';
import { Link } from 'react-router-dom';
import PriceList from './modals/PriceList';
import CallRequests from './modals/CallRequests';
import InstantMessaging from './modals/instantMessaging/InstantMessaging';
import Credentials from './modals/Credentials';

import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideMenu } from '../../actions/menuActions';


function TopMenu(props) {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menu)

    useEffect(() => {
        const root = document.documentElement;
        const blockRoot = document.getElementById("root")
        if (menu.isMobile) {
            //for mobiles it initially close
            if (menu.isOpen) {
                root?.style.setProperty(
                    "--side-menu-width", '279px'
                );
            }
            menu.isOpen ? blockRoot.style.overflowX = 'hidden' : blockRoot.style.overflowX = 'initial'
        }
    }, [menu])
    return (
        <header className="topMenu">
            {menu.isMobile &&
                (<div className="topMenu-mobileFrstRow">
                    <div className="sideMenu-head__logo">
                        <Link to="/"> PMS </Link>
                    </div>
                    <Search placeholder='Search patients' customClasses="mobile_search" />
                    <div className="sideMenu-head__button-wrapper" onClick={() => { dispatch(toggleSideMenu()) }}>
                        <div className="burger" ></div>
                    </div>
                </div>)
            }
            <nav className="topMenu-nav">
                <div className="dropdown">
                    <a href="#" className="topMenu-nav__item link dropdown__title"
                        {...(
                            menu.isMobile ?
                                {
                                    onClick:
                                        (e) => {
                                            //fix 'focus' on mobiles
                                            document.querySelector(".topMenu-nav").style.overflow = 'initial'
                                            e.target.nextSibling.style.display = 'flex'
                                        }
                                    ,
                                    onBlur:
                                        (e) => {
                                            //fix 'focus' on mobiles
                                            setTimeout(() => {
                                                document.querySelector(".topMenu-nav").style.overflowX = 'auto'
                                                e.target.nextSibling.style.display = 'none'
                                            }, 100)
                                        }
                                } : null
                        )}
                    >Quick links</a>
                    <div className="dropdown__content">
                        {
                            quickLinks.map((item, index) => {
                                return (
                                    <a href='/asd' key={`quickLinks_${index}`}>{item.title}</a>
                                )
                            })
                        }
                    </div>
                </div>
                {window.matchMedia("(min-width: 426px)").matches && <Search placeholder='Search patients' />}
                <PriceList />
                <Credentials btnText="Logins and Passwords" />
                <InstantMessaging />
                <CallRequests />
                <LogIn />
            </nav>
        </header >
    );
}

const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps, { toggleSideMenu })(TopMenu)