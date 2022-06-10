import React from 'react';
import './style/menu.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='mainHeader'>
            <div className='headerItem menu'>
                <Link to="/"> Home</Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/about-us"> About</Link>
            </div>
            <div className='headerItem logos'>
                <img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt=""/>
                <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt=""/>
                <img src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1654848981~hmac=06f3ab4f0c46ac6ea3f33a55e65a5581" alt=""/>
            </div>
        </div>
    );
};

export default Header;