import React from 'react';
import { ankuranLogo} from '../../../../constants/images';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__img-container">
            <img className="hero__img" src={ankuranLogo} alt="yo" />
          </div>
        </div>
        {/* <video className="hero__video" autoPlay muted loop>
          <source
            src="https://user-images.githubusercontent.com/73426684/229353841-049efeaf-0f99-485b-988f-fb40732a98d7.mp4"
            type="video/mp4"
          />
        </video> */}
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
