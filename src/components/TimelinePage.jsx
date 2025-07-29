import React from 'react'
import './style.css'
import timeline from '../../images/timeline.png'

const TimelinePage = () => {
  return (
    <div className="page-container">
        <div className='section-timeline'>
          <h2 className='enTitle'>Timeline</h2>
        </div>
        <img 
          src={timeline} 
          alt="timeline" 
          style={{ width: '250px', height: 'auto' }} 
        />

    </div>
  )
}

export default TimelinePage