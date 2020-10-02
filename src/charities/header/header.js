import React from 'react';
import { NavLink } from 'react-router-dom';

import Authentication from '../../asset/authentication.png';
import MegakheirLogo from '../../asset/MEGAKHEIR-Logo.png';
import './header.scss';

const Footer = () => {
    return (
        <header className='header'>
            <div className='authentication'>
                <NavLink to='/'> <img src={Authentication} alt='AuthenticationIcon' /></NavLink>
            </div>
            <div className='megakheir-logo'>
                <NavLink to='/'><img src={MegakheirLogo} alt='MegakheirLogo' /></NavLink>
            </div>
        </header>
    )
}
export default Footer