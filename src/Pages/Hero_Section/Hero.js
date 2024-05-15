// Hero.js

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">Your <b>Website</b></a>
            <ul className="links">
              <li>Home</li>
              <li>About Us</li>
              <li>Work</li>
              <li>Info</li>
              <li>Get Started</li>
            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Mastering Your Life <br/>By Mastering <br/>Emotions</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p> */}
              <button>App store</button>
            </div>
            <div className="image">
              <img className="main-image" src="/hero_images/image.png" alt="Illustration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
