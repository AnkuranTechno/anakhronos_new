import React from 'react';
import { Button } from '../../../../components';
import { Prarambh } from '../../../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="freshers__hero" id="hero">
      <div className="freshers__hero__container">
        <div className="freshers__hero__img-container">
          <img className="freshers__hero__img" src={Prarambh} alt="Prarambh" />
        </div>
        <div className="freshers__hero__content">
          <h1 className="freshers__hero__heading">Prarambh</h1>
          <p className="freshers__hero__desc">
            Techno Main Saltlake's cultural committee offers a welcoming
            <br />
            platform for students to showcase their skills and adjust to college
            life.
            <br />
            The Freshers' welcome event includes on-stage and off-stage
            <br />
            activities, creating a supportive environment and boosting
            participants' morale.
          </p>

          <Button
            className="freshers__hero__register-btn"
            type="solid"
            text="Register Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
