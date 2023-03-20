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
              <p>about the event some imp details</p>
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
              <p>about the event some imp details</p>
            </div>
            <LinkButton title={title2} render={render2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaCard;
