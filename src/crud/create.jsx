import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//create.jsx file
const Create = () => {
    
    const [values,setvalues] =useState({
        name: '',
        email: '',
        number: ''
    })

    const [responseData, setResponseData] = useState(null);
    const navigate = useNavigate();

    const handlesubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/user', values)
            .then(res => {
                console.log(res);
                setResponseData(res.data); // Set the response data in state
                navigate('/');
            })
            .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
       <h1>ADD A USER</h1>
       <form onSubmit={handlesubmit}>
       <div className='mb-2'>
                    <label  htmlFor='name'>Name:</label>
                    <input type="text"  placeholder = "enter your name" value={values.name} onChange={(e) => setvalues({ ...values, name: e.target.value })} />
                </div>

                <div >
                    <label>Email:</label>
                    <input type="email" placeholder = "enter your email" value={values.email} onChange={(e) => setvalues({ ...values, email: e.target.value })} />
                </div>
                <div>
                    <label>Number:</label>
                    <input type="text" placeholder = "enter your number" value={values.number} onChange={(e) => setvalues({ ...values, number: e.target.value })} />
                </div>

<button className='btn btn-success'>Submit</button>
<Link to= "/" className = 'btn btn-primary ms-3'>Back</Link>

       </form>
        </div>
      
    </div>
  )
}

export default Create;
