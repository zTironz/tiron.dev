import React, { useEffect } from 'react';
import Project from './Project';
// import Test from './Test';
import { useState } from 'react';
import Pagination from './pagination/Pagination';
import Loader from './Loader';



const Projects = () => {

    // const [test, setTest] = useState('');

    const [totalPages , setTotalPages] = useState(0);

    const [limit] = useState(3);
   
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);

    const store = [{
        id:0,
        img: require('../images/firstProj.png'),
        // titleHightlight: 'First',
        title: 'First Project',
        descr: 'lorumipsum'
    },
    {
        id:1,
        img: require('../images/newsexplorer.png'),
        // titleHightlight: 'News',
        title: 'News Explorer',
        descr: 'lorumipsum'
    },
    {
        id:2,
        img: require('../images/LogitechLanding.png'),
        title: 'Logitech',
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
];

useEffect(() => {

    setTotalPages(getPageCount(store,limit))
    
    // setProjects(currentRecords)
  }, [])

  const indexOfLastRecord = page * limit;
const indexOfFirstRecord = indexOfLastRecord - limit;
const currentRecords = store.slice(indexOfFirstRecord, 
    indexOfLastRecord);


const getPageCount =  (store,limit) => {
    return Math.ceil(store.length / limit)
}



const changePage = (page) => {
    // setProjects(store)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setPage(page)
   }

// const onTestChangeNumber = (number) => {
//     setTest(number * 2)
// }

    return (
        <section className='projects'>
            <div className='projects__title-wrapper'>
                <h3 className='projects__title-back'>MY PROJECT</h3>
                <h3 className='projects__title'>MY PROJECTS</h3>
            </div>
            

            {loading ?
       <div style={{display: "flex", justifyContent: "center"}}><Loader/></div> :
       <div className='projects__wrapper'>
            {currentRecords.map((project, index) => 
         <Project key={project.id} project={project} />
      )}
            </div>
     }
            
      <Pagination  page={page} changePage={changePage} totalPages={totalPages} />
      {/* <Test  onTestChange={onTestChangeNumber}/>
      <div>{test}</div> test Lifting State Up */}
        </section>
    );
};

export default Projects;