import React from 'react'
import nike from './Img/697_nike.jpg'
const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src={nike} alt="logo"  className='logo'/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation