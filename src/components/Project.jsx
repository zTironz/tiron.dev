import React from 'react';

const Project = (props) => {
    console.log(props)
    return (
        <div className='project'>
            <img src={props.img} alt="project" />
            <div>
                <h4>{props.title}</h4>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default Project;