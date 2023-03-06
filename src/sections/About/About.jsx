import React from 'react';
import { SectionHeading } from '../../components';

import './About.scss';

const About = () => {
  return (
    <div className="about" id="about">
      {/* <SectionHeading title="About The Event" /> */}
      <div className='about_wrapper'>
        <div className='about_1'>
        <h1>About The Event</h1>
        <p> Annual Cultural Fest of Techno India Salt Lake oragnized by team Ankuran.</p>
          </div>
          <div className='about_2'>
            <h2>Where</h2>
            <p>Comming Soon...</p>
          </div>
          <div className='about_3'>
          <h2>When</h2>
          <p>Comming Soon...</p>
          </div>
      </div>

    </div>
  );
};

export default About;
