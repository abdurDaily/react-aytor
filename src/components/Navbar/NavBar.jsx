import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="aytor" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-lg-0">
                    <li className="nav-item">
                    <NavLink to='/' className={({isActive})=>isActive ? 'active_item' : 'pending_item' }  aria-current="page" href="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/about' className={({isActive})=>isActive?'active_item' : 'pending_item'} aria-current="page" href="#">About</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default NavBar;