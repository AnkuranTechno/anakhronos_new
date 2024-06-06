import React from "react";
import "./GuestArtist.scss";
import { ShilpaRao } from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Button } from "../../../../components";

const GuestArtist = () => {
  return (
    <div className="guest" id="about">
      <div className="guest__wrapper container">
        <div className="guest__left">
          <img className="" src={ShilpaRao} alt="guest_image" />
        </div>
        <div className="guest__right">
          <h1>"Anakhronos Guest Artist 2024" </h1>
          <p>
            Anakhronos 2024, the biggest socio-cultural fest of Eastern India,
            organized by TEAM ANKURAN, the official socio cultural committee of
            Techno Main Saltlake, was lit up by a spellbinding performance from
            the mesmerizing Shilpa Rao, making it an unforgettable highlight of
            the event. Held on the 22nd of May, 2024, at the Karunamoyee Mela
            Ground, the event was a perfect blend of energy, music, and cultural
            celebration.
          </p>
          <h2>"TMSL to host its biggest cultural fest of the year"</h2>
          <h3 className="telegraph">-TELEGRAPH</h3>
          <Link to="https://www.telegraphindia.com/edugraph/campus/anakhronos-2k23-tmsl-to-hold-its-biggest-cultural-fest-of-the-year/cid/1932220">
            <Button type="solid" text="Explore" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestArtist;
