import React from 'react'
import banner from '../../images/banner.jpg'
import './style.css'

const CoverPage = () => {
  return (
    <div className="coverPage">
      <img 
        src={banner} 
        alt="Wedding Background" 
        className="cover-bg" 
      />
      <div className="cover-overlay" />
      <div className="cover-text">
        <h1 className="main-title">Baroy & Issay</h1>
        <p className="subtitle">A Celebration of Love</p>
        <span className="wedDate">August 23, 2025</span>
      </div>
    </div>
  )
}

export default CoverPage