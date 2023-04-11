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
            The transition from school to college life is a defining moment in
            every student’s life which further lays the foundation for his/her
            personality development. The cultural committee of Techno Main
            Saltlake has always been committed to giving these young minds a
            jump-start by providing them an incubating platform to showcase
            their skills. Freshers' welcome is one such platformthat encompasses
            a series of both on-stage & off-stage events which rightly boost the
            morale of the young participants by hosting them in a compassionate
            surrounding.
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
