import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <div className='project'>
                <img className='project__img' src={props.project.img} alt="project" />
             <div className='project__desc'>
                 <h4 className='project__title'>{props.project.titleHightlight} {props.project.title}</h4>
                 <button className='project__button'>View Details</button>
             </div>
        </div>
    );
};

export default Project;