import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="lightBg">
        <div className="container">
          <div className="headerInfo">
            <h1 className="font40 extraBold">Let's get in touch!</h1>
            <p className="font13">
              We are happy to hear doubts and suggestions
            </p>
          </div>
          <div className="row" style={{ paddingBottom: '30px' }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <form className="form">
                <label className="font13">For Sponsorship email us at:</label>
                <a href="mailto:sponsorship@anakhronos.in"> sponsorship@anakhronos.in</a>
              {/*   <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                /> */}
                {/* <label className="font13">Email:</label> */}
                {/* <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                /> */}
                <br/>
                <label className="font13">For Other Queries email us at:</label>
                <a href="mailto:official@anakhronos.in"> official@anakhronos.in</a>
                <br />
                <label className="font13">Please feel free to contact us at:</label>
                {/* <label className="font13"> +91 79805 64381 / +91 73668 11346</label> */}
                <a href="tel:+917980564381"> +917980564381</a> 
                <label className="font13"> / </label>
                <a href="tel:+917366811346"> +917366811346</a> 

                {/* <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                /> */}
              </form>
             {/*  <div className="submitWrapper flex">
                <input
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: '220px' }}
                />
              </div> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: '50%' }}
                className="flexNullCenter flexColumn"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
