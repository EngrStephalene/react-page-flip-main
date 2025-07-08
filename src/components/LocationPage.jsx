import React from 'react'
import location from '../../images/location-no-bg.png'
import './Location.css'

const LocationPage = () => {
  return (
    <div className='location-page'>
       <div className="overlay">
        <img 
          src={location} 
          alt="Wedding Location" 
          className="location-img" 
        />
        <p>
          For your convenience, shuttle services will be available to transport guests from the parking area to the venue. Please refer to the map for designated pick-up points.
        </p>
        <p>
          There are several accommodation options nearby for out-of-town guests. We have arranged special rates with select hotels. Please contact us for more information.
        </p>
      </div>
    </div>
  )
}

export default LocationPage