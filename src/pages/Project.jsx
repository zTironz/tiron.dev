import React, { useState } from 'react';

const Project = () => {
    
    const [store,setStore] = useState([])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')

    function news() {
        fetch('http://localhost:3000/articles')
        .then(res => res.json())
        .then(data => setStore(data.data))
        .catch(err => console.log(err))
    }
    function newNews() {
        fetch('http://localhost:3000/articles/new', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                 tag: tag,
                text: text,
                owner: "64c2789b13ebbef8e0da431f"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        // .then(res => res.json())
        // .then(data => setStore(data.data))
        // .catch(err => console.log(err))
    }

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }
    function handleChangeText(e) {
        setText(e.target.value);
    }
    function handleChangeTag(e) {
        setTag(e.target.value);
    }


  
    return (
        <div className='blog'>
            <p className='blog__text'>In developing...</p>
            <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>news()}>load</button>
            <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>newNews()}>Create</button>
            <input type="text" onChange={handleChangeTitle} />
            <input type="text" onChange={handleChangeText} />
            <input type="text" onChange={handleChangeTag} />
            <div style={{color: "red", fontSize: '8px'}}>{
                store.map(el => 
             <div style={{border: "1px solid black", padding: '2px', margin: '2px'}} key={el._id}>
                <p>{el.title}</p>
                <p>{el.text}</p>
                <p>{el.tag}</p>
             </div>
                )
            }</div>
        </div>
    );
};

export default Project;