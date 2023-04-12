import React from 'react';

const Test = (props) => {
    function  handleChange (e) {
        console.log(props.value,'1')
        console.log(e.target.value,'2')
        props.onTestChange(e.target.value);
      }


    return (
        <div>
            <input value={props.value} onChange={handleChange} type="text" />
        </div>
    );
};

export default Test;