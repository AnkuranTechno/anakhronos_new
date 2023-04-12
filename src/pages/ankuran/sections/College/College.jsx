import React from 'react';
import './College.scss';
import { technoImg } from '../../../../constants/images';

const College = () => {
  return (
    <div className="college" id="about">
      <div className="college__wrapper container">
        <div className="college__left">
          <img className="" src={technoImg} alt="college_image" />
        </div>
        <div className="college__right">
          <h1>Techno Main Salt Lake </h1>
          <p>
            Techno Main Salt Lake was established in the year of 2001. In the
            test of time, it has stood tall and thrives to be better than what
            it was yesterday. It is a place where everyone is motivated to be
            the best versions of themselves and do what they can do their best.
            A college where everyone believes that practice makes a human
            perfect, our efforts always pay off and that dreams do come true.
          </p>
        </div>
      </div>
    </div>
  );
};

export default College;
