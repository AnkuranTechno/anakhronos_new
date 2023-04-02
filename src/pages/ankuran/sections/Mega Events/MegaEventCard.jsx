import React from "react";
import { Link } from "react-router-dom";
import "./MegaEventCard.css";
import { logo } from "../../../../constants/images";
import LinkButton from "../LinkButton/LinkButton";

const MegaCard = (props) => {
  console.log({ props });
  const title1 = "Prarambh";
  const title2 = "Anakhronos";
  const render1 = "freshers";
  const render2 = "anakhronos";
  return (
    <div className="megaeventswrapper">
      <div className="title">
        <h1>Mega Events</h1>
      </div>
      <div className="events-mega">
        <div id="event-card-mega">
          <div className="red">
            <img
              src="https://raw.githubusercontent.com/Ankush109/anakhronos_new/master/src/assets/anakhronos/images/Prarambh.png"
              alt="event_image"
            />
          </div>
          <div className="green">
            <div className="title">
              <Link to="/freshers">
                <h2>Prarambh</h2>
              </Link>
            </div>
            <div className="desc">
              <p>The transition from school to college life is a defining moment in every student’s life which further lays the foundation for his/her personality development. The cultural committee of Techno Main Saltlake has always been committed to giving these young minds a jump-start by providing them an incubating platform to showcase their skills. Freshers' welcome is one such platform that encompasses a series of both on-stage & off-stage events which rightly boost the morale of the young participants by hosting them in a compassionate surrounding.</p>
            </div>
            <LinkButton title={title1} render={render1} />
          </div>
        </div>
      </div>
      <div className="events2-mega">
        <div id="event-card-mega">
          <div className="red">
            <img src={logo} alt="event_image" />
          </div>
          <div className="green">
            <div className="title">
              <Link to="/anakhronos">
                <h2>Anakhronos</h2>
              </Link>
            </div>
            <div className="desc">
              <p>Anakhronos is the Annual Cultural Fest of Techno Main Salt Lake (formerly Techno India Salt Lake). It is the stage to one of the largest cultural fests of Kolkata. A conglomeration of Greek words “Ana” & “Khronos”, Anakhronos translates to “Moments Surpassing Time”. With a series of exhilarating star performances and enthralling participation of young talents from across the city in various events, Anakhronos has always been a platform to etch an unforgettable memory of joyful moments in the canvas of time.</p>
            </div>
            <LinkButton title={title2} render={render2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaCard;
