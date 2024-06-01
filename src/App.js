import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './crud/create'
import Update from './crud/update'
import Read from './crud/read'
import Home from './crud/home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  
  return (
   <BrowserRouter>
   <Routes>
    <Route path = '/' element={<Home/>}></Route>
    <Route path = '/create' element={<Create/>}></Route>
    <Route path = '/update/:id' element={<Update/>}></Route>
    <Route path = '/read/:id' element={<Read/>}></Route>

    
   </Routes>
   </BrowserRouter>
  )
}

export default App;
