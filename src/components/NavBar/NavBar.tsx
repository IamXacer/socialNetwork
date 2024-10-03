import React from "react";
import s from './NavBar.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

export const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.items}>
                < NavLink to='/profile'className = { nav => nav.isActive ? s.active : s.item }
                >Profile</NavLink>
            </div>
            <div className={s.items}>
                < NavLink to='/dialog' className = { nav => nav.isActive ? s.active : s.item }>Friends</NavLink>
            </div>
            <div className={s.items}>
                < NavLink to='/news'className = { nav => nav.isActive ? s.active : s.item }
                >News</NavLink>
            </div>
            <div className={s.items}>
                < NavLink to='/music'className = { nav => nav.isActive ? s.active : s.item }
                >Music</NavLink>
            </div>
            <div className={s.items}>
                < NavLink to='/setting'className = { nav => nav.isActive ? s.active : s.item }
                >Settings</NavLink>
            </div>

        </nav>


    )
}