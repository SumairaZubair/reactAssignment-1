import React from 'react'
import amazon from './Img/amazon.png'
import flipKart from './Img/flipkart.png'

function Shopping() {
  return (
    <div>
      <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
    <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icdata:ions">
              <img src={amazon} alt="amazon-logo" className='aflogos' />
              <img src={flipKart} alt="flipkart-logo" className='aflogos' />
            </div>
          </div> 
    </div>
  )
}

export default Shopping