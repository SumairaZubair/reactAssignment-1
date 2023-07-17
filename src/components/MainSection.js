import React from 'react';
import red from './Img/red shoes.png'
const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <div className='text'>
          <h1>YOUR FEET DESERVE
             THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          </div>
          <div className="hero-image">
          <img src= {red} alt="hero-image" className='hero' />
        </div>
        </div>
  
          {/* {/* <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div> */}
   
          {/* <div className="shopping">
            {/* <p>Also Available On</p>
  
            <div className="brand-icdata:ions">
              <img src="https://wosu.org/television/broad-high-presents/attachment/amazon-logo-transparent-png/" alt="amazon-logo" />
              <img src="https://www.freepnglogos.com/pics/flipkart-logo" alt="flipkart-logo" />
            </div>
          </div> */} 
          {/* } */}
       
        {/* <div className="hero-image">
          <img src= {red} alt="hero-image" />
        </div> */}
      </main>
    );
  };
  
  export default HeroSection;