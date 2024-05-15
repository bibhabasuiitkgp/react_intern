import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 });

    // Ensure proper cleanup
    return () => {
        tl.kill(); // Kill the timeline to prevent memory leaks
    };
}, []);
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
