import React from 'react';
import './Header.scss';

import Logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <a href="index.html" className="logo">
                    <img src={ Logo } alt="foi logo" className="logo-img" />
                </a>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-list-item"><a href="./speakers.html">Sudionici</a></li>
                        <li className="nav-list-item"><a href="./events.html">Događanja</a></li>
                        <li className="nav-list-item"><a href="#">Kontakt</a></li>
                        <li className="nav-list-item"><a href="#">Prijavi se</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;