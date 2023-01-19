import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
       
            <div className='header__nav'>
          <div className='header__findMe'>
          <p>Find Me On</p>
          </div>
          <div className='header__menu'>
            {/* <a className='header__link' href='/home'>Home</a> */}
            <Link className='header__link' to='/'>Home</Link>
            {/* <a className='header__link' href='/about'>About</a> */}
            <Link className='header__link' to='/project'>Project</Link>
            {/* <a className='header__link' href='/project'>Project</a> */}
            <a className='header__link' href="/contact"><button className='contact'>Contact Me</button></a>

          </div>
        </div>
    
    );
};

export default NavBar;