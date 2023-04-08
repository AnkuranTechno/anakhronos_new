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
          <h1 className="anakhronos__hero__heading">Anakhronos</h1>
          <p className="anakhronos__hero__desc">
            From a small beginning back in 2001 to being one of the most awaited
            fests of Kolkata,
            <br />
            Anakhronos has always been an occasion to break the monotonous chain
            of college life.
            <br />
            It has always been a gateway to a whole new dimension that redefines
            <br />
            entertainment with events spanning for three days.
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
