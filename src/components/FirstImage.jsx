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
    </div>
  )
}

export default FirstImage