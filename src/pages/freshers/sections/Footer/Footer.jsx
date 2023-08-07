import React from 'react';
import {
  facebookLogo,
  instagramLogo,
  youtubelogo,
  twitterlogo,
} from '../../../../constants/images';
import {
  AnkuranQR,
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
              <h3>Phone No. : XXXXXXXXXX</h3>
              <h3>Email : tmsl.team.ankuran@gmail.com</h3>
              <div className="contact-us-logo">
              <a href="https://www.facebook.com/Anakhronos?mibextid=ZbWKwL" target='_blank' rel='noreferrer'><img src={facebookLogo} alt=""/></a>
              <img src={youtubelogo} alt="" />
              <img src={twitterlogo} alt="" />
              <a href="https://instagram.com/anakhronos_tmsl?igshid=YmMyMTA2M2Y=" target='_blank' rel='noreferrer'><img src={instagramLogo} alt="" /></a>
            </div>
            </div>
            
          </div>
          <div className="contact-us">
          <div className="contact-us-detail">
              <h2>Bank Details</h2>
              <h3>Team Ankuran</h3>
              <h3>A/C No. :4548000100003955</h3>
              <h3>IFSC code :PUNB0454800</h3>
              <h3>Bank Name :Sector V</h3>
              <h3>Bank Address :Punjab National Bank</h3>
            </div>
          </div>
          <div className="contact-us">
          <div className="contact-us-detail">
              <h2>Scan Here to pay(Only For Donations)</h2>
              <img className='Qr_footer' src={AnkuranQR} alt="" />
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
