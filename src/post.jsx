import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Dell = () => {
    
    const [post,setpost] = useState({
     title:'',
     body:''
    })
    const handleInput =(event) =>{
        setpost({...post,[event.target.name]:event.target.value})
    }
    function handlesubmit(event){
      event.preventDefault()
      axios.post('https://jsonplaceholder.typicode.com/todos',{post})
      .then(response =>setpost(response.post))
      //.catch(err => console.log(err))
    }
    
  return (
    <div className='d-flex align-items-center justify-content-center vh-100 w-100'>
      <div className='w-50 text-center'>
        <form on onSubmit={handlesubmit}>
            <button>Add</button>
            title:<input type= "text" onchange={handleInput} name="title"></input><br/><br/>
            post:<input type= "text" onchange={handleInput} name="post"></input><br/><br/>
            <button className='btn btn-primary'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dell;
