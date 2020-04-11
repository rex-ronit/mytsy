import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from './mytsy-logo-1.png';

const url = './mytsy-logo-1.png';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <img src={logo} className="logo-container" alt="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;