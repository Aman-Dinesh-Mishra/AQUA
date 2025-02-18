import React from 'react'
import '../Navbar/Navbar.css'
import LOGO from '../../assets/LOGO.png';
import {Outlet, Link} from 'react-router-dom';
import Contact from '../Contact/Contact';
import { Button } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
    <img src={LOGO} alt='Logo' className='logo'/>
    <div className="desktopMenu">
     <Link className='desktopMenuListItem'to='/'>Home</Link>
     <Link className='desktopMenuListItem'to='/dashboard'>Dashboard</Link>
     <Link className='desktopMenuListItem'to='/profile'>Survey</Link>
     <Link className='desktopMenuListItem'to='/login'>Login</Link>
     
     <Outlet />

    </div>
    <Link className="desktopMenuBtn" to='/contact'>Contact Us</Link>
    </nav>
  );
}

export default Navbar

