import React from 'react';
import './style/menu.css'

const Footer = () => {
    const yourName = 'Ghenadie Savva'
    return (
        <div className='mainFooter'>
            <div className='footerItem'>"Created by: {yourName}"</div>
            <div className='footerItem'>"ASSIST Software 2022"</div>
        </div>
    );
};

export default Footer;