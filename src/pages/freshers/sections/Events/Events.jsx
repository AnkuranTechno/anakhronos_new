import React from 'react';
import { SectionHeading } from '../../../../components';
import { freshersCompetitions } from '../../../../data/events/freshers';
import EventCard from './EventCard';

import './Events.scss';

const Events = () => {
  return (
    <seciton className="events" id="freshers-events">
      <div className="bgcolour">
        <div className="section-container">
          <SectionHeading title="Events" />
          <div className="event__card-container">
            {freshersCompetitions.map((e, index) => (
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
