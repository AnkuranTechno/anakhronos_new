import React from "react";

import { GroupMerchandise } from "../../../../constants/images";
import'./merchandise.scss';
import { Button } from '../../../../components';


const Merchandise = () => {
  return (
    <div className="anakhronos__hero" id="hero">
      <div className="anakhronos__hero__container">
        <div className="anakhronos__hero__img-container">
          <img className="anakhronos__hero__img y" src={GroupMerchandise} alt="yo" />
          {/* <img
            className="anakhronos__hero__img"
            src={GroupMerchandise}
            alt="anakhronos"
          /> */}
        </div>
        <div className="anakhronos__hero__content">
          <h1 className="anakhronos__hero__heading">GET YOUR MERCHANDISE NOW!</h1>
          {/* <p className="anakhronos__hero__desc"> */}
          {/* Anakhronos is the Annual Cultural Fest of Techno Main Salt Lake (formerly Techno India Salt Lake). */}
            {/* <br />
            It is the stage to one of the largest cultural fests of Kolkata.A conglomeration of Greek words <br/>“Ana” & “Khronos”, Anakhronos translates to “Moments Surpassing Time” .
            With a series of exhilarating <br/>  star performances and enthralling participation of young talents from across the city in various events,<br/>Anakhronos has always been a platform to etch an unforgettable memory of joyful moments in the canvas of time.
          </p> */}

          <Button
            className="anakhronos__hero__register-btn"
            type="solid"
            text="GET Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
