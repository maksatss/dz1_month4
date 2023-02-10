import React from 'react';
import './Header.css'
import Logo from "./images_header/Autoline_logo.svg";

function Header() {
    return (
        <div>
            <header className="header">
                <div className="wrapper">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <a href="/" className="header__logo-link">
                                <img src={Logo} alt="" className="header__logo-picture"/>
                            </a>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item">
                                    <a href="/katalog" className="header__link">Каталог</a>
                                </li>
                                <li className="header__item">
                                    <a href="/info" className="header__link">О Нас</a>
                                </li>
                                <li className="header__item">
                                    <a href="/contscts" className="header__link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>

    );
}

export default Header;