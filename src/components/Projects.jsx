import React from 'react';
import Project from './Project';
import { useState } from 'react';

const Projects = () => {

    const [projects,setProjects] = useState([{
        id:0,
        img: '../images/',
        title: 'lol',
        descr: 'lorumipsum'
    },
    {
        id:1,
        img: '../images/',
        title: 'lol',
        descr: 'lorumipsum'
    },
    {
        id:2,
        img: '../images/',
        title: 'lol',
        descr: 'lorumipsum'
    }
]);

    return (
        <section className='projects'>
            <div className='projects__title-wrapper'>
                <h3 className='projects__title-back'>MY PROJECT</h3>
                <h3 className='projects__title'>MY PROJECTS</h3>
            </div>
            <Project project={projects}  />
        </section>
    );
};

export default Projects;