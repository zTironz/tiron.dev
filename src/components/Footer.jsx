import React from 'react';

const Footer = () => {
    let dateYear = new Date();
    return (
        <footer className='footer'>
            <p className='footer_copy'>&copy; Mikryukov Oleg {dateYear.getFullYear()}</p>
        </footer>
    );
};

export default Footer;