import React from 'react';
import './GuestArtist.scss';
import { guestArtist } from '../../../../constants/anakhronosImg';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components';

const GuestArtist = () => {
  return (
    <div className="guest" id="about">
      <div className="guest__wrapper container">
        <div className="guest__left">
          <img className="" src={guestArtist} alt="guest_image" />
        </div>
        <div className="guest__right">
          <h1>"Anakhronos Guest Artist 2023" </h1>
          <p>
          Anakhronos has a rich legacy of bringing together some of the biggest names in the music industry,
           and this year is no different. On the final day, we have a spectacular live performance by the one and only Monali Thakur.
           She needs no introduction, and we are thrilled to have her grace on our stage.
          </p>
          <h2>"TMSL to host its biggest cultural fest of the year"</h2>
          <h3 className="telegraph">-TELEGRAPH</h3>
          <Link to="https://www.telegraphindia.com/edugraph/campus/anakhronos-2k23-tmsl-to-hold-its-biggest-cultural-fest-of-the-year/cid/1932220"><Button type="solid" text="Explore" /></Link>
        </div>
      </div>
    </div>
  );
};

export default GuestArtist;
