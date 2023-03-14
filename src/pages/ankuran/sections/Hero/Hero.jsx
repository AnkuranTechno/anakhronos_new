import React from 'react';
import { ankuranLogo ,blurherobg } from '../../../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__img-container">
        {/* <img className="hero__bgimg" src={blurherobg} alt="yo" /> */}
        <img className="hero__img" src={ankuranLogo} alt="yo" />
        </div>
        <div className="hero__content">
          <h1 className="hero__heading">Ankuran</h1>
          <p className="hero__desc">
            Team Ankuran stands on the principle of togetherness and that
            together we can overcome any obstacle thrown our way. A team which
            is packed with people with various talents and capabilities, and
            always looks forward to having fresh, budding individuals who love
            to work as a team. Here we appreciate and accept that change is the
            only constant in life and to keep going, we must keep blooming by
            learning new things with each passing day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
