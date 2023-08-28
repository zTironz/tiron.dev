import React, { useEffect, useState } from 'react';
import './Project.scss'

const Project = () => {
    
    const [store,setStore] = useState([])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')

    const [edit, setEdit] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() =>  {
        fetch('http://localhost:3000/articles')
        .then(res => res.json())
        .then(data => setStore(data.articles))
        .catch(err => console.log(err))
    },[])

    // function news() {
    //     fetch('http://localhost:3000/articles')
    //     .then(res => res.json())
    //     .then(data => setStore(data.articles))
    //     .catch(err => console.log(err))
    // }
    function newNews() {
        fetch('http://localhost:3000/articles', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                 tag: tag,
                text: text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(res => res.json())
        .then(data => setStore(prev => [...prev, data.data]))
        .catch(err => console.log(err))
    }

    function login() {
        fetch(`http://localhost:3000/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            "email": email,
            "password": password
          }),
        })
        .then(res => console.log(res.json())
        )
        .catch(err => console.log(err))
    }

    function handleDeleteItem(id) {
        fetch(`http://localhost:3000/articles/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            "email": email,
            "password": password
          }),
        })
        .then(res => console.log(res.json())
        )
        setStore(store.filter((employee) => {
            console.log(employee)
            return employee._id !== id;
          }))
        .catch(err => console.log(err))
    }

    function handleChangeItem(e) {
      setEdit(!edit)
      if(edit===false) {
        fetch(`http://localhost:3000/articles/${e}`, {
          method: "PATCH",
     credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "title": title,
            "text": text
          }),
        })
        .then(res => res.json()
        )
      }
      
    }

    return (
        <div className='blog'>
            <p className='blog__text'>In developing...</p>
            {/* <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>news()}>load</button> */}
            <button className='button' onClick={()=>newNews()}>Create</button>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <input type="text" onChange={(e) => setTag(e.target.value)} />
            <br />
            <br />
            <input placeholder='email' type="text" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='password' type="text" onChange={(e) => setPassword(e.target.value)} />
            <button className='button' onClick={()=>login()}>Login</button>
            <br />
            <br />
            <div>{
                store.map(el => 
             <div className='news' key={el._id}>
                {edit?<p>{el.title}</p>:<input onChange={(e) => setTitle(e.target.value)} placeholder={el.title}></input>}
                {edit?<p>{el.text}</p>:<input onChange={(e) => setText(e.target.value)} placeholder={el.text}></input>}
                {edit?<p>{el.tag}</p>:<input onChange={(e) => setTag(e.target.value)} placeholder={el.tag}></input>}
                {edit?<p>{el.owner.name}</p>:<input placeholder={el.owner.name}></input>}
                <button className='button' onClick={()=>{handleDeleteItem(el._id)}}>delete</button>
                <button className='button' onClick={()=>{handleChangeItem(el._id)}}>{edit?'edit':'save'}</button>
             </div>
                )
            }</div>
<div>test</div>
</div>
    );
};

export default Project;