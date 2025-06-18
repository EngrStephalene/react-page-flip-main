import React from 'react'
import motif from '../../images/motif.jpg'
import './ThemePage.css'

const ThemePage = () => {
  return (
    <div className='theme-page'>
      <img 
        src={motif} 
        alt="Wedding Motif" 
        className="motif-bg" 
        />
    </div>
  )
}

export default ThemePage