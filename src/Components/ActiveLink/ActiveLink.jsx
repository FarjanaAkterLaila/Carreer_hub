import React from 'react';
import './ActiveLink.css';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active fs-5" : "text-decoration-none px-3 fs-5"}
        >
            {children}
           
        </NavLink>
    );
};

export default ActiveLink;