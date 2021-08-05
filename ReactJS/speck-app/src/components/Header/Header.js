import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
}

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <Link to="/" className="logo">
                    <img src={ Logo } alt="foi logo" className="logo-img" />
                </Link>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to="/speakers">{ links.speakers }</Link></li>
                        <li className="nav-list-item"><Link to="/events">{ links.events }</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;