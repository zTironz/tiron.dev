import React, { useEffect, useState } from 'react';

const Project = () => {
    
    const [store,setStore] = useState([])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')

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
        // .then(res => res.json())
        // .then(data => setStore(data.data))
        // .catch(err => console.log(err))
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
        
        // .then(data => setStore(data.data))
        // .catch(err => console.log(err))
    }

    function deleteItem(id) {
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
            // 👇️ remove object that has id equal to 2
            console.log(employee)
            return employee._id !== id;
          }))
        
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

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }


  
    return (
        <div className='blog'>
            <p className='blog__text'>In developing...</p>
            {/* <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>news()}>load</button> */}
            <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>newNews()}>Create</button>
            <input type="text" onChange={handleChangeTitle} />
            <input type="text" onChange={handleChangeText} />
            <input type="text" onChange={handleChangeTag} />
            <br />
            <br />
            <input placeholder='email' type="text" onChange={handleChangeEmail} />
            <input placeholder='password' type="text" onChange={handleChangePassword} />
            <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>login()}>Login</button>
            <br />
            <br />
            <div style={{color: "red", fontSize: '8px'}}>{
                store.map(el => 
             <div style={{border: "1px solid black", padding: '2px', margin: '2px'}} key={el._id}>
                <p><b>{el.title}</b></p>
                <p>{el.text}</p>
                <p>{el.tag}</p>
                <p>{el.owner.name}</p>
                <button style={{color: "red", fontSize: '8px', width: '40px', height: '20px'}} onClick={()=>{deleteItem(el._id)}}>delete</button>
             </div>
                )
            }</div>


<div id="yandex _rtb _R-I-677833-1" style={{maxHeight: 80 + "vh"}}>
<div style={{height: 72 + 'vh'}}></div></div>
<div>test</div>
</div>
    );
};

export default Project;