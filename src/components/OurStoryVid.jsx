import React, { useRef, useEffect, useState } from 'react';
import './OurStory.css';
import japanVid from '../../images/JAPAN.mp4';
import { Button } from '@mui/material';

const OurStoryVid = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Autoplay the video when mounted
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Autoplay failed:", err));
      }
    }

    // Pause the video when the component unmounts
    return () => {
      if (video && !video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    };
  }, []);

  return (
    <div className="ourStoryVid">
      <h1 className='title'>The Proposal</h1>
    <div className={`our-story-container ${isPlaying ? 'expanded' : ''}`}>
      {/* <h1 className="title">Our Story</h1> */}
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="story-video"
          src={japanVid}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
    </div>

  );
};

export default OurStoryVid;
