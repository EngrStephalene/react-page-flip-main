import React from 'react';
import './style.css';
import attireImage from '../../images/whatToWear-no-bg.png'; // update with your actual image path
import colorPallet from '../../images/motifNoBG.png'

const ThemePage = () => {
  return (
    <div className="page-container">
      <h1 className="theme-script-title">Details</h1>

      <div className="theme-section">
        <h2 className="theme-label">THEME</h2>
        <p className="theme-text">Pastels & Florals</p>
        
        <img 
          src={colorPallet} 
          alt="Color Palette" 
          style={{ width: '300px', height: 'auto' }} 
        />

        <h2 className="theme-label">ATTIRE</h2>
        <p className="theme-text">Dressy Casual Attire</p>
        <p className="theme-subtext">anything that is stylish yet comfortable</p>
      </div>

      <div className="attire-image-wrap">
        <img src={attireImage} alt="Attire Guide" className="attire-img" />
        <div className="attire-captions">
          <div>
            <h4>Gentlemen</h4>
            <p>Smart Semi-formal</p>
          </div>
          <div>
            <h4>Ladies</h4>
            <p>Garden chic-inspired<br></br>semi-formal attire</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
