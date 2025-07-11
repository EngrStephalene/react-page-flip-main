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
      <div className="cover-text">
        <h1 className="main-title">Baroy & Issay</h1>
      </div>
    </div>
  )
}

export default CoverPage
