// import React, { useEffect } from 'react';
import Project from './Project';
import { useState } from 'react';
import Pagination from './pagination/Pagination';
import Loader from './Loader';



const Projects = () => {

    const [totalPages , setTotalPages] = useState(2);

    const [limit] = useState(6);
   
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    const store = [{
        id:0,
        img: require('../images/firstProj.png'),
        // titleHightlight: 'First',
        title: 'First Project',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/site'
    },
    {
        id:1,
        img: require('../images/newsexplorer.png'),
        // titleHightlight: 'News',
        title: 'News Explorer',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/news-explorer-frontend'
    },
    {
        id:2,
        img: require('../images/LogitechLanding.png'),
        title: 'Logitech',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/LogitechLanding'
    },
    {
        id:3,
        img: require('../images/places.png'),
        title: 'Places',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/mestoo'
    },
    {
        id:4,
        img: require('../images/adaptive.png'),
        title: 'Journey',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/adaptive'
    },
    {
        id:5,
        img: require('../images/firstSite.png'),
        title: 'First site',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/tironz'
    },
    {
        id:6,
        img: require('../images/kasperTest.png'),
        title: 'Kaspersky test',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/kasperTest'
    },
    {
        id:7,
        img: require('../images/hedgehod.png'),
        title: 'Hedgehog',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/hedgehod'
    },
    {
        id:8,
        img: require('../images/idaProj.png'),
        title: 'Ida test',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/IdaProj'
    },
    {
        id:9,
        img: require('../images/reactPosts.png'),
        title: 'React test',
        descr: 'lorumipsum',
        src: 'https://github.com/zTironz/reactPosts'
    }
];

// useEffect(() => {

//     setTotalPages(getPageCount(store,limit))
    
//     // setProjects(currentRecords)
//   }, [])

  const indexOfLastRecord = page * limit;
const indexOfFirstRecord = indexOfLastRecord - limit;
const currentRecords = store.slice(indexOfFirstRecord, 
    indexOfLastRecord);


const getPageCount =  (store,limit) => {
    return Math.ceil(store.length / limit)
}

function lol () {
    setTotalPages(getPageCount(store,limit))
}

const changePage = (page) => {
    setPage(page)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
   }


    return (
        <section className='projects'>
            <div className='projects__title-wrapper'>
                <h3 className='projects__title-back'>MY PROJECTS</h3>
                <h3 className='projects__title'>MY PROJECTS</h3>
            </div>
            

            {loading ?
       <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
        :
       <div className='projects__wrapper'>
            {currentRecords.map((project) => 
         <Project key={project.id} project={project} />
      )}
            </div>
     }
            
      <Pagination onClick={()=>lol()}  page={page} changePage={changePage} totalPages={totalPages} />
        </section>
    );
};

export default Projects;