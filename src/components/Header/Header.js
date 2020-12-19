import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <section className="header-menu">
                <Link className="header-menu-button" to={{pathname: `/`}}><FontAwesomeIcon icon={faHome} /></Link>
                <Link className="header-menu-button" to={{pathname: `/movie`}}><FontAwesomeIcon icon={faVideo} /></Link>
                <Link className="header-menu-button" to={{pathname: `/tv`}}><FontAwesomeIcon icon={faTv} /></Link>
            </section>
            <section className="header-container">
                <button className="header-container-button"><FontAwesomeIcon icon={faSearch} /></button>
                <input className="header-container-input" placeholder="Búsqueda..." />
            </section>
        </header>
    );
}

export default Header;
