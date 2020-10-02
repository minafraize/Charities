import React from 'react';
import { NavLink } from 'react-router-dom';

import PowerdedBy from '../../asset/Powered-by.png';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='powerded-by'>
                <NavLink to='/'> <img src={PowerdedBy} alt="powerdedBy" /> </NavLink>
            </div>
            <div className='follow-us'>
                <NavLink to='/'> <i className="fab fa-facebook-f fa-2x icon facebook-icon"></i></NavLink>
                <NavLink to='/'> <i className="fab fa-instagram fa-2x icon insta-icon"></i></NavLink>
            </div>
        </footer>
    )
}
export default Footer