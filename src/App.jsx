import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import {Outlet, Link} from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
    
      <Navbar/>
      <Routes>
         
         
        <Route path='/' element={<Intro/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes>
      
     
      
      
      
      
    </div>
  );
}

export default App


