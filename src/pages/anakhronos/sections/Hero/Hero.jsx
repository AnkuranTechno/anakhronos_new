import React from 'react';
import { Button } from '../../../../components';
import { logo, anakhronosLogoText } from '../../../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="anakhronos__hero" id="hero">
      <div className="anakhronos__hero__container">
        <div className="anakhronos__hero__img-container">
          <img className="anakhronos__hero__img yo" src={logo} alt="yo" />
          <img
            className="anakhronos__hero__img"
            src={anakhronosLogoText}
            alt="anakhronos"
          />
        </div>
        <div className="anakhronos__hero__content">
          <h1 className="anakhronos__hero__heading">"Anakhronos"</h1>
          <p className="anakhronos__hero__desc">
          The Official Annual Cultural Fest of Techno Main Salt Lake organized by Team Ankuran
          </p>

          <Button
            className="anakhronos__hero__register-btn"
            type="solid"
            text="Register Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
