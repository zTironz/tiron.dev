import React from 'react';

const NavBar = () => {
    return (
       
            <div className='header__nav'>
          <div className='header__findMe'>
          <p>Find Me On</p>
          </div>
          <div className='header__menu'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Project</a>
            <a href="#"><button>Contact Me</button></a>

          </div>
        </div>
    
    );
};

export default NavBar;