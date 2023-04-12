import React from 'react';
import {
  logo,
  facebookLogo,
  instagramLogo,
  youtubelogo,
  twitterlogo,
} from '../../../../constants/images';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__section footer" id="footer">
      <div className="app__section-container footer-container">
        <div className="footer-1">
          <div className="contact-about">
          <div className="contact-us-detail">
              <h1>Team Ankuran</h1>
              <h3>Techno Main Salt Lake</h3>
              <h3>Kolkata - 700091, West Bengal.</h3>
              <h3>Phone No. : 033-23575683/84/86</h3>
              <h3>Email : tmsl.team.ankuran@gmail.com</h3>
            </div>
            <div className="contact-us-logo">
              <img src={facebookLogo} alt="" />
              <img src={youtubelogo} alt="" />
              <img src={twitterlogo} alt="" />
              <img src={instagramLogo} alt="" />
            </div>
          </div>
          <div className="contact-us">
          <div className="contact-us-detail">
              <h2>Bank Details</h2>
              <h3>Team Ankuran</h3>
              <h3>A/C No. :</h3>
              <h3>IFSC code :</h3>
              <h3>Bank Name :</h3>
              <h3>Bank Address :</h3>
              <h3>Upi Id :</h3>
            </div>
          </div>
          <div className="contact-us">
          <div className="contact-us-detail">
              <h2>Scan Here to pay</h2>
              <h3>Team Ankuran</h3>
            </div>
          </div>
          {/* qr code image should go after it  */}
        </div>

        <div className="footer-2">
          <h1>Ankuran Copyright © 2023</h1>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
