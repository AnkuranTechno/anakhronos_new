import React from 'react';
import { SectionHeading } from '../../../../components';
import { anakhronosCompetetions } from '../../../../data/events/anakhronos';
import EventCard from './EventCard';

import './Events.scss';

const Events = () => {
  return (
    <seciton className="events" id="anakhronos-events">
      <div className="bgcolour">
        <div className="section-container">
          <SectionHeading title="Events" />
          <div className="event__card-container">
            {anakhronosCompetetions.map((e, index) => (
              <EventCard
                key={index}
                title={e.name}
                desc={e.description}
                img={e.image}
              />
            ))}
          </div>
        </div>
      </div>
    </seciton>
  );
};

export default Events;
