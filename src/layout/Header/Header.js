import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo.png'
import './header.css'

const Header = () => {
    return (
            <header>
                <nav className='header__menu'>
                    <Link to="/home" className="link__logo"><img src={Logo} alt="Logo" /></Link>
                    <ul>
                        <li><Link to="/Home">Accueil</Link></li>
                        <li><Link to="*">Profil</Link></li>
                        <li><Link to="*">Réglages</Link></li>
                        <li><Link to="*">Communauté</Link></li>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;