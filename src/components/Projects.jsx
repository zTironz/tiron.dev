import React from 'react';
import Project from './Project';
import { useState } from 'react';

const Projects = () => {

    const [projects] = useState([{
        id:0,
        img: require('../images/diplom.png'),
        titleHightlight: 'News',
        title: 'Explorer',
        descr: 'lorumipsum'
    },
    {
        id:1,
        img: '../images/',
        title: 'test2',
        descr: 'lorumipsum'
    },
    {
        id:2,
        img: '../images/',
        title: 'test3',
        descr: 'lorumipsum'
    }
]);

    return (
        <section className='projects'>
            <div className='projects__title-wrapper'>
                <h3 className='projects__title-back'>MY PROJECT</h3>
                <h3 className='projects__title'>MY PROJECTS</h3>
            </div>
            {/* <Project projects={projects}  /> */}

            {projects.map((project, index) => 
         <Project project={project} />
      )}
        </section>
    );
};

export default Projects;