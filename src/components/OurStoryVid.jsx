import React from 'react';
import './style.css';
import japanVid from '../../images/JAPAN.mp4';

const OurStoryVid = ({ onPlay }) => {
  return (
    <div className="ourStoryVid">
      <h1 className="title">The Proposal</h1>
      <div className="video-wrapper">
        <video
          className="story-video"
          src={japanVid}
          controls
          onPlay={onPlay}
        />
      </div>
    </div>
  );
};

export default OurStoryVid;
