import React from 'react'
import './style.css'
import timeline from '../../images/timeline.png'

const TimelinePage = () => {
  return (
    <div className="theme-page-container">
        <h2 className='first-title'>Timeline</h2>
        <img 
          src={timeline} 
          alt="timeline" 
          style={{ width: '250px', height: 'auto' }} 
        />

    </div>
  )
}

export default TimelinePage