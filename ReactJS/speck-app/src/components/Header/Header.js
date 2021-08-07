import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <NavLink to="/" className="logo">
                    <img src={ Logo } alt="foi logo" className="logo-img" />
                </NavLink>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item"><NavLink to="/speakers" activeClassName="active-link">{ links.speakers }</NavLink></li>
                        <li className="nav-list-item"><NavLink to="/events" activeClassName="active-link">{ links.events }</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;