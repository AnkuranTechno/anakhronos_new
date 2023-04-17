import React from 'react';
// import { SectionHeading } from '../../../../components';

import './About.scss';

const About = () => {
  return (
    <div className="about" id="freshers-about">
      {/* <SectionHeading title="About The Event" /> */}
      <div className="about_wrapper">
        <div className="about_1">
          <h1>About The Event</h1>
          <p>
          {'The transition from school to college life is a defining moment in every student’s life which further lays the foundation for his/her personality development. The cultural committee of Techno Main Saltlake has always been committed to giving these young minds a jump-start by providing them an incubating platform to showcase their skills. Freshers welcome is one such platformthat encompasses a series of both on-stage & off-stage events which rightly boost the morale of the young participants by hosting them in a compassionate surrounding.'}
          </p>
        </div>
        <div className="about_2">
          <h2>Where</h2>
          <p>College Grounds</p>
        </div>
        <div className="about_3">
          <h2>When</h2>
          <p>23rd of April</p>
        </div>
      </div>
    </div>
  );
};

export default About;
