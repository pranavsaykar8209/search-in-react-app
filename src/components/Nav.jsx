import React, { useState } from 'react';

import "./Responsive.css"
import "./Nav1.css"
import "./darkmode1.css"
import logo from "./searchin images/search-in.png"
import logo3 from "./searchin images/new_icon.webp"
import logo1 from "./Images/moon.png"
import logo2 from "./Images/sun.png"


const Nav = () => {
    
    

  return <div className='container'>
      <div className="navbar flex items-center">
          <div className="left flex">
              <img src={logo3} alt="" className="navlogo1" />
              <img src={logo} alt="" className="navlogo" />
              <ul className='flex'>
                  {/* <li>Relata.io</li> */}
                  <li>Features</li>
                  <li>Impact</li>
                  <li>About Us</li>
              </ul>
          </div>
          <div className="right flex">
              <ul className='flex'>
                  <li>Contact Us</li>
                  <li className='btn'>Join our Waiting List</li>
              </ul>
              
          </div>
      </div>
  </div>;
};

export default Nav;


