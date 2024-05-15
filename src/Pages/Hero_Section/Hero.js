// Hero.js

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="main-container_Hero">
      <div className="blur-circle1_Hero"></div>
      <div className="blur-circle2_Hero"></div>
      <div className="landing-page_Hero">
        
        <div className="content_Hero">
          <div className="container_Hero">
            <div className="info_Hero">
              <h1 className='hero-heading'>Mastering Your Life <br/>By Mastering <br/>Emotions</h1>
              <button>App store</button>
            </div>
            <div className="image_Hero">
              <img className="main-image_Hero" src="/hero_images/image.png" alt="Illustration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
