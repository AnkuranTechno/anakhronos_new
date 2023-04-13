import React from 'react';
import { Button } from '../../../../components';
import { logo, anakhronosLogoText } from '../../../../constants/images';
import './Hero.scss';
import { Link } from 'react-router-dom';

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
      Experience a vibrant celebration of diversity and creativity at our annual cultural fest night!.
          </p>
          <Link to="/layout">
          <Button
            className="anakhronos__hero__register-btn"
            type="solid"
            text="Register Now"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
