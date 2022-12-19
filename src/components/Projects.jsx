import React from 'react';
import Project from './Project';
import { useState } from 'react';


const Projects = () => {

    // const [totalPages , setTotalPages] = useState(0);

    // const [limit, setLimit] = useState(10);
   
    // const [page, setPage] = useState(1);

    const [projects] = useState([{
        id:0,
        img: require('../images/firstProj.png'),
        titleHightlight: 'First',
        title: 'Project',
        descr: 'lorumipsum'
    },
    {
        id:1,
        img: require('../images/newsexplorer.png'),
        titleHightlight: 'News',
        title: 'Explorer',
        descr: 'lorumipsum'
    },
    {
        id:2,
        img: require('../images/LogitechLanding.png'),
        title: 'LogitechLanding',
        descr: 'lorumipsum'
    },
    {
        id:3,
        img: require('../images/places.png'),
        title: 'Places',
        descr: 'lorumipsum'
    },
    {
        id:4,
        img: require('../images/adaptive.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    },
    {
        id:5,
        img: require('../images/firstSite.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    },
    {
        id:6,
        img: require('../images/kasperTest.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    },
    {
        id:7,
        img: require('../images/hedgehod.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    },
    {
        id:8,
        img: require('../images/idaProj.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    },
    {
        id:9,
        img: require('../images/reactPosts.png'),
        title: 'First Adaptive',
        descr: 'lorumipsum'
    }
]);

// const changePage = (page) => {
//     setPage(page)
//     fetchPosts(limit,page)
//    }

    return (
        <section className='projects'>
            <div className='projects__title-wrapper'>
                <h3 className='projects__title-back'>MY PROJECT</h3>
                <h3 className='projects__title'>MY PROJECTS</h3>
            </div>
            {/* <Project projects={projects}  /> */}

            {projects.map((project, index) => 
         <Project key={project.id} project={project} />
        //  <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      )}
        </section>
    );
};

export default Projects;