import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Calendar from '../Calendar/Calendar'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { closeSideMenu, toggleSideMenu } from '../../actions/menuActions';
//Обьект с навигацией
import { nav } from './navObject'



function SideMenu(props) {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menu)



    useEffect(() => {
        const root = document.documentElement;
        if (menu.isMobile) {
            //for mobiles it initially close
            root?.style.setProperty("--side-menu-width", "0px");
            let sideMenu = document.getElementsByClassName("sideMenu")[0]
            sideMenu.classList.add("menuHidden")
        } else {
            root?.style.setProperty(
                "--side-menu-width",
                menu.isOpen ? "230px" : "40px"
            );
        }
    }, [menu])

    //Показываем элементы подменю
    function showCollapsedMenu(e) {
        e.currentTarget.classList.toggle("active_block")
        let content = e.currentTarget.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            //+10 потому что еще внутренний отступ 10px
            content.style.maxHeight = content.scrollHeight + 10 + "px";
        }
    }



    return (
        <aside className="sideMenu">
            <div className="sideMenu-head">
                <div className="sideMenu-head__logo">
                    <Link to="/"> PMS </Link>
                </div>
                {!menu.isMobile &&
                    <div className="sideMenu-head__button-wrapper" onClick={() => dispatch(toggleSideMenu())}>
                        <div className="burger" ></div>
                    </div>
                }
            </div>
            {menu.isMobile &&
                <div className="sideMenu-head__button-wrapper" onClick={() => dispatch(toggleSideMenu())}>
                    <div className="burger" ></div>
                </div>
            }
            <Calendar menu={menu} />
            <nav className="sideMenu-nav">
                {nav.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <div className="sideMenu-nav-wrapper" key={`${index}_showed`}>

                            {item.isCollapse ? (
                                <Link
                                    to="#"
                                    collapsed="yes"
                                    onClick={function (e) { showCollapsedMenu(e) }}
                                    className="sideMenu-nav__item">
                                    <Icon />
                                    <span className="sideMenu-nav__item_title">{item.title}</span>
                                </Link>
                            ) : (
                                <NavLink
                                    {...(menu.isMobile ? { onClick: () => dispatch(toggleSideMenu()) } : {})}
                                    to={item?.link}
                                    className="sideMenu-nav__item"
                                    activeClassName="active_block_item"
                                >
                                    <Icon />
                                    <span className="sideMenu-nav__item_title">{item.title}</span>
                                </NavLink>
                            )}

                            <div className="sideMenu-nav-collapsedMenu">
                                {item.isCollapse && item?.collapsedMenu.map((hiddenItem, index2) => (
                                    <div key={`${index}_hidden_${index2}`} className="sideMenu-nav-collapsedMenu__item" >
                                        <NavLink to={hiddenItem.link} activeClassName='active_sublink'
                                            {...(menu.isMobile ? { onClick: () => dispatch(toggleSideMenu()) } : {})}
                                        >{hiddenItem.title}</NavLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </nav>
        </aside >
    );
}
const mapStateToProps = (state) => ({
    menu: state.menu
})
export default connect(mapStateToProps, { closeSideMenu, toggleSideMenu })(SideMenu)