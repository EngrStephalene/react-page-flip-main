import React from 'react'
import './style.css'
import image3 from '../../images/Image3.jpg'
import highschool from '../../images/highschool.JPEG'

const OurStory = () => {
  return (
    <div className='ourStory'>
        <h1 className='first-title'>OurStory</h1>
        <img 
                src={highschool} 
                alt="Wedding Background" 
                className="ourStory-bg" 
              />
        <p 
        sx={{
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '20px',
          padding: '0px 40px',
        }}
        >
          Ours isn't just a love story, it's a lifetime in the making. 
        </p>
        <br></br>
<p className='ilangSturya'>We first met as kids, sitting in the same classrooms, trading glances and growing up side by side. From childhood friends to teenage sweethearts, we've shared more chapters than most and a few plot twists along the way.
<br /><br /> Now, after all these years, we're ready to start a brand new chapter, this time, forever. We're so excited to celebrate with the people who've witnessed our journey and cheered us on along the way.
Thank you for being part of our story.</p>
    </div>
  )
}

export default OurStory