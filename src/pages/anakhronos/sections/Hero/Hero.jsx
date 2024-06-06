import React from "react";
import { Button } from "../../../../components";
// import { logo, anakhronosLogoText } from '../../../../constants/images';
import "./Hero.scss";
import { Link } from "react-router-dom";
import { AnakhronosLogo24 } from "../../../../constants/images";

const Hero = () => {
  return (
    <div className="anakhronos__hero" id="hero">
      <div className="anakhronos__hero__container">
        <div className="anakhronos__hero__img-container">
          <img
            className="anakhronos__hero__img yo"
            src="https://github.com/AnkuranTechno/anakhronos_new/assets/102872077/22be0dd0-0878-43d0-bf7a-fb57d11c300e"
            alt="yo"
          />
          <img
            className="anakhronos__hero__img"
            src={AnakhronosLogo24}
            alt="anakhronos"
          />
        </div>
        <div className="anakhronos__hero__content">
          <h1 className="anakhronos__hero__heading">"Anakhronos"</h1>
          <p className="anakhronos__hero__desc">
            Experience a vibrant celebration of diversity and creativity at our
            annual cultural fest night!.
          </p>
          {/* <Link
            className="anakhronos__hero__register-btn"
            to="/anakhronosRegister"
          >
            <Button type="solid" text="Register Now" />
          </Link> */}
          {
            <Link
              to="https://heylink.me/anakhronos2023/"
              target="_blank"
              className="anakhronos__hero__register-btn"
            >
              <Button type="solid" text="Register Now" />
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
