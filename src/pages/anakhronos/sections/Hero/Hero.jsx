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
            Anakhronos is the Annual Cultural Fest of Techno Main Salt Lake
            (formerly Techno India Salt Lake). It is the stage to one of the
            largest cultural fests of Kolkata.A conglomeration of Greek words
            “Ana” & “Khronos”, Anakhronos translates to “Moments Surpassing
            Time” . With a series of exhilarating star performances and
            enthralling participation of young talents from across the city in
            various events, Anakhronos has always been a platform to etch an
            unforgettable memory of joyful moments in the canvas of time.
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
