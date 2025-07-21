import React from 'react'
import location from '../../images/location-no-bg.png'
import './style.css'

const LocationPage = () => {
  return (
    <div className='location-page'>
      <h1 className="locationTitle">Location</h1>
        <img 
          src={location} 
          alt="Wedding Location" 
          className="location-img" 
        />
        <h1 className="locationSubTitle">The Barn at Mango Ranch</h1>
        <h2 className="locationExtraSubTitle">Palinpinon Road, Valencia, Negros Oriental</h2>
    </div>
  )
}

export default LocationPage