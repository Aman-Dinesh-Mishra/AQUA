import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
    <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>AquaPulse </span>City Management System</span>
        <p className='introPara'>Aims to provide analysis for optimum Water consumption in various domains.</p>
        <Link><button className='btn'>Try it</button></Link>
    </div>
    
    </section>
  );
}

export default Intro;
