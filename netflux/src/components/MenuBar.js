import React from 'react';
import { NavLink } from 'react-router-dom'

const MenuBar = (props) => {
    return (
        <>
            <li>
                <NavLink exact to="/" className="navbar-item">
                    ألرئيسية
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/Movies" className="navbar-item">
                    ألأفلأم
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/Shows" className="navbar-item">
                    ألمسلسلأت
                </NavLink>
            </li>
        </>
    )
};

export default MenuBar;