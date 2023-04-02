import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact bgcolour_contact" className="contact">
      <div className="lightBg">
        <div className="container">
          <div className="headerInfo">
            <h1 className="font40 extraBold">Let's get in touch!</h1>
            <p className="font13">
              We are happy to hear doubts and suggestions
            </p>
          </div>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <form className="form">
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </form>
              <div className="submitWrapper flex">
                <input type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
