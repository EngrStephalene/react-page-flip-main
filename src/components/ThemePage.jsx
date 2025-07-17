import React from 'react'
import motif from '../../images/motif-edited.png'
import './style.css'

const ThemePage = () => {
  return (
    <div className='theme-page'>
      <h1 className="theme-title">What to wear</h1>
      <div className="motif-container">
        <img 
          src={motif} 
          alt="Wedding Motif" 
          className="motif-bg" 
        />
      </div>
    </div>
  )
}

export default ThemePage