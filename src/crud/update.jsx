/*import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Update = () => {
    //const [data,setData] = useState([])
   const { id   } = useParams();

   const [values,setvalues] =useState({
    name: '',
    email: '',
    phone: ''
})
    const navigate =useNavigate();
      useEffect(()=>{
     axios.get('http://localhost:3000/user' + id)
     .then(res => {
      setvalues = (res.data);
     })
     .catch(err => console.log(err));
      }, [id])

      const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/user/'+id, values)
   .then(res => {
    console.log(res);
    Navigate('/')

   })
   .catch(err => console.log(err));
      }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
   <h1>update user</h1>
   <form onSubmit={handleUpdate}>
    <div className='mb-2'>
    <label htmlFor='name'>Name:</label>
    <input type= "text" name='name' className='form-control' placeholder='Enter Name'
    value ={values.name} onchange={e => setvalues({...values, name :e.target.value})}/>
    </div>

    <div className='mb-2'>
    <label htmlFor='email'>Email:</label>
    <input type= "email" name='email' className='form-control' placeholder='Enter email'
   value ={values.email} onchange={e => setvalues({...values, email :e.target.value})}/>
    </div>
    
    <div className='mb-2'>
    <label htmlFor='name'>Phone:</label>
    <input type= "text" name='phone' className='form-control' placeholder='Enter phone'
   value ={values.number} onchange={e => setvalues({...values, phone :e.target.value})}/>
    </div>

<button className='btn btn-success'>update</button>
<Link to= "/" className = 'btn btn-primary ms-3'>Back</Link>

   </form>
    </div>
  
</div>
  )
}

export default Update;*/


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        axios.get('http://localhost:3000/user/' + id)
            .then(res => {
                setValues(res.data); // Update values state
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/user/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Update user</h1>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name'
                            value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name='email' className='form-control' placeholder='Enter email'
                            value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='phone'>Phone:</label>
                        <input type="text" name='phone' className='form-control' placeholder='Enter phone'
                            value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;

