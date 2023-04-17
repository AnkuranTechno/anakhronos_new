import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components';
import './Events.scss';

const EventCard = ({ title, desc, img }) => {
  return (
    <div className="event__card">
      <img src={img} alt={title} className="event__card-img" />
      <h2 className="event__card-title">{title}</h2>
      <p className="event__card-description">{desc}</p>
      {/* <Link to="/anakhronosRegister">
        <Button className="event__card-btn" type="outline" text="Register" />
      </Link> */}
      {<Link to="https://heylink.me/anakhronos2023/" target='_blank'>
        <Button className="event__card-btn" type="outline" text="Register" />
      </Link>}
    </div>
  );
};

export default EventCard;
