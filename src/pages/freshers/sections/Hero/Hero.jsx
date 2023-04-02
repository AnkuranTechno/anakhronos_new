import React from 'react';
import { Button } from '../../../../components';
import { Prarambh } from '../../../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__img-container">
          <img className="hero__img" src={Prarambh} alt="Prarambh" />
        </div>
        <div className="hero__content">
          <h1 className="hero__heading">Prarambh</h1>
          <p className="hero__desc">
          Techno Main Saltlake's cultural committee offers a welcoming  
            <br />
            platform for students to showcase their skills and adjust to college life.
            <br />
            The Freshers' welcome event includes on-stage and off-stage 
            <br />
            activities, creating a supportive environment and boosting participants' morale.
          </p>

          <Button
            className="hero__register-btn"
            type="solid"
            text="Register Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
