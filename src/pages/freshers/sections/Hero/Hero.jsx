import React from 'react';
import { Button } from '../../../../components';
import { Prarambh } from '../../../../constants/images';
import './Hero.scss';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="freshers__hero" id="hero">
      <div className="freshers__hero__container">
        <div className="freshers__hero__img-container">
          <img className="freshers__hero__img" src={Prarambh} alt="Prarambh" />
        </div>
        <div className="freshers__hero__content">
          <h1 className="freshers__hero__heading">"Prarambh"</h1>
          <p className="freshers__hero__desc">
            Join us for a night of fun, music, and memories as we welcome the
            newest members of our college family at the Techno Main Salt Lake.
          </p>
          <Link className="freshers__hero__register-btn" to="/prarambhRegister">
            <Button type="solid" text="Register Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
