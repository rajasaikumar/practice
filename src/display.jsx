import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Display =() =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/posts")
      .then(res => setData(res.data))
      
    }, []);

    
    return(
   <div className='container'>
<div className='mt-3'>
<h2>fetch data from api</h2>
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>NAME</th>
      <th>EMAIL</th>
      <th>NUMBER</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((user,index) =>{
        return<tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.number}</td>
        </tr>
      })
    }
  </tbody>
</table>
</div>

   </div>

    )
}
 export default Display;