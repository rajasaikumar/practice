/*import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
//read .jsx file
const Read = () => {
        const [data,setData] = useState([])
       const { id   } = useParams();

          useEffect(()=>{
         axios.get('http://localhost:3000/user' + id)
         .then(res => setData(res.data))
         .catch(err => console.log(err));
          }, [id])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Details of users</h3>
        <div className='mb-2'>
            <strong>Name:{data.name}</strong>
        </div>

        <div className='mb-2'>
            <strong>Email:{data.email}</strong>
        </div>

        <div className='mb-2'>
            <strong>Phone:{data.phone}</strong>
        </div>
      <Link to={`/update/${id}`} className= 'btn btn-success'>Edit</Link>
      <Link to= "/" className= 'btn btn-primary ms-3'>Back</Link>
     </div>
    </div>
  );
}

export default Read;*/

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const { id } = useParams();
    const [data, setData] = useState(null); 

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${id}`) 
            .then(res => setData(res.data)) 
            .catch(err => console.log(err));
    }, [id]); 

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Details of users</h3>
                
                {data && (
                    <>
                        <div className='mb-2'>
                            <strong>Name: {data.name}</strong>
                        </div>
                        <div className='mb-2'>
                            <strong>Email: {data.email}</strong>
                        </div>
                        <div className='mb-2'>
                            <strong>Phone: {data.number}</strong>
                        </div>
                    </>
                )}
                <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
    );
}

export default Read;

