import React from 'react'
import firstImage from '../../images/Image1.jpg'
import './FirstImage.css'

const FirstImage = () => {
  return (
    <div className='firstImage'>
      <img 
        src={firstImage} 
        alt="Wedding Image1" 
        className="firstImage-bg" 
      />
      <div className="overlay-text">
        <h1 className='text1'>We joyfully invite you to our wedding day on</h1>
        <h2>August 23, 2025 · The Barn at Mango Ranch</h2>
      </div>
    </div>
  )
}

export default FirstImage
