import React from 'react';
import CV from '../images/cv.svg'
import PDF from '../files/OlegMikryukovResume.pdf'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero__texts'>
            <div className='hero__wrapper'>
            <img className='hero__img' src={require('../images/test.jpeg')} alt="hero" />
            <div className='hero__img-wrapper'>
            <div className='hero__img-plus'></div>
            <div className='hero__img-slash'></div>
            </div>
            
            </div>
            <div>
            <h3 className='hero__text'>Hello!</h3>
            <h1 className='hero__title'>I’m <span className='hero__name'>Oleg</span></h1>
            <h3 className='hero__prof'>WEB Developer</h3>
            <span className='hero__line'></span>
            <p className='hero__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum ligula a euismod luctus. In facilisis nulla quis laoreet ultricies. Sed pharetra urna diam, nec ultrices sapien vestibulum sed. Cras nec libero quis nisl aliquet maximus. Vivamus porttitor tempus tristique. Integer vitae semper magna, nec venenatis dui. Suspendisse sed erat eros. Fusce vel nibh quam. Ut sed sapien massa.
            </p>
            </div>
            
            <a className='hero__cv-link' href={PDF} target="_blank" rel="noreferrer"><button className='hero__cv-button'><img src={CV} alt='cv' />Download CV</button></a>
            </div>
           
        </section>
    );
};

export default Hero;