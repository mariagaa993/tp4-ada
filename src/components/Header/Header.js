import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <section className="header-container">
                <button className="header-container-button"><FontAwesomeIcon icon={faSearch} /></button>
                <input className="header-container-input" placeholder="Búsqueda..." />
            </section>
            <section className="header-menu">
                <button className="header-menu-button"><FontAwesomeIcon icon={faHome} /></button>
                <button className="header-menu-button"><FontAwesomeIcon icon={faVideo} /></button>
                <button className="header-menu-button"><FontAwesomeIcon icon={faTv} /></button>
            </section>
        </header>
    )
}

export default Header;
