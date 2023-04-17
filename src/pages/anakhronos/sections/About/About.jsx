import React from 'react';
// import { SectionHeading } from '../../../../components';

import './About.scss';

const About = () => {
  return (
    <div className="about" id="anakhronos-about">
      {/* <SectionHeading title="About The Event" /> */}
      <div className="about_wrapper">
        <div className="about_1">
          <h1>About The Event</h1>
          <p>
          {'It is the stage to one of the largest cultural fests of Kolkata.A conglomeration of Greek words “Ana” & “Khronos”, Anakhronos translates to “Moments Surpassing Time”. With a series of exhilarating star performances and enthralling participation of young talents from across the city in various events, Anakhronos has always been a platform to etch an unforgettable memory of joyful moments in the canvas of time.'}
          </p>
        </div>
        <div className="about_2">
          <h2>Where</h2>
          <p>College Grounds</p>
        </div>
        <div className="about_3">
          <h2>When</h2>
          <p>24th, 26th of April</p>
        </div>
      </div>
    </div>
  );
};

export default About;
