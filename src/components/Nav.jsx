import React, { useState } from 'react';

import "./Responsive.css"
import "./Nav1.css"
import "./darkmode1.css"
import logo from "./searchin images/search-in.png"
import logo3 from "./searchin images/new_icon.webp"
import logo1 from "./Images/moon.png"
import logo2 from "./Images/sun.png"
import Footer from './Footer';


const Nav = () => {
    
    const [bar, setBar] = useState('');
    const menuBar = ()=>{
        if(bar === ''){
            setBar('active');
        }
        else{
            setBar('');
        }
    }

  return <div className='container '>
      
      <div className="navbar flex items-center">
          <div className="left flex">
              <img src={logo3} alt="" className="navlogo1" />
              <img src={logo} alt="" className="navlogo" />
              <ul className='flex mobnav1'>
                  {/* <li>Relata.io</li> */}
                  <li to="/Footer">Features</li>
                  <li>Impact</li>
                  <li>About Us</li>
              </ul>
              <div className={`hamburger ${bar}`} onClick={()=>{menuBar()}}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
          </div>
          <div className="right flex mobnav1">
              <ul className='flex'>
                  <li>Contact Us</li>
                  <li className='btn'>Join our Waiting List</li>
              </ul>     
          </div>
      </div>
      <div className={`mob_nav ${bar}`}>
              <ul className='mob_nav2'>
                  {/* <li>Relata.io</li> */}
                  <li>Features</li>
                  <li>Impact</li>
                  <li>About Us</li>
                  <li className=''>Contact Us</li>
              </ul>
              <ul className=' mob_nav3'>
                  
                  <li className='btn'>Join our Waiting List</li>
              </ul>
            </div>
  </div>;
};

export default Nav;


