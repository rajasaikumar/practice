import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [data,setData] = useState([]);
  
    useEffect(()=>{
   axios.get('http://localhost:3000/user')
   .then(res => setData(res.data))
   .catch(err => console.log(err));
    },[])

    
    const handleDelet = (id) =>{
      const confirm =window.confirm("would you like to delet");
      if(confirm) {
         axios.delete(`http://localhost:3000/user/` +id)
         .then(res => {

         }).catch(err => console.log(err));
         
      }
      
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      {/* <p>users</p> */}
      <h1>List of users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
            <Link to= "/create" className='btn btn-success'>ADD</Link>
        </div>
      <table className='table table-striped'>
        <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th>ACTION</th>
        </tr>
        </thead>
        <tbody>
            {
                data.map((d,i)=>(
                    <tr key ={i}>
                       <td>{d.id}</td>
                       <td>{d.name}</td>
                       <td>{d.email}</td>
                       <td>{d.number}</td>
                       <td>
                       <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>READ</Link>
                        <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>EDIT</Link>
                        <button onClick={e =>handleDelet(d.id)} className='btn btn-sm btn-danger'>DELET</button>
                       </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      </div>
    </div>
  )

 
}

export default Home;
