import React from 'react'
import '../Navbar/Navbar.css'
import LOGO from '../../assets/LOGO.png';
import {Outlet, Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src={LOGO} alt='Logo' className='logo'/>
    <div className="desktopMenu">
     <Link className='desktopMenuListItem'to='/'>Home</Link>
     <Link className='desktopMenuListItem'to='/dashboard'>Dashboard</Link>
     <Link className='desktopMenuListItem'to='/profile'>User Feedback</Link>
     <Link className='desktopMenuListItem'to='/login'>Login</Link>
     
     <Outlet />

    </div>
    <button className="desktopMenuBtn">Contact Us</button>
    </nav>
  );
}

export default Navbar

