import React from 'react'
import banner from '../../images/banner.jpg'
import './CoverPage.css'

const CoverPage = () => {
  return (
    <div className='coverPage'>
        <img 
        src={banner} 
        alt="Wedding Background" 
        className="cover-bg" 
        />
        <h1>A WEDDING CELEBRATION IS HAPPENING!</h1>
        <h2>We invite you to share the celebration of our marriage on</h2>
        <h1>Saturday, August 23, 2025</h1>
        <h2>Location: The Barn at Mango Ranch</h2>
    </div>
  )
}

export default CoverPage