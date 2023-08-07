import React from 'react';
import MegaCard from './MegaEventCard';
import './MegaEvent.scss';
import { Anakhronos, FreshersMega } from '../../../../constants/images';

const MegaEvent = () => {
  return (
    <section class="mega-events-section timeline gradient-bg" id="events">
      <div class="section-container">
        <h1 className="mega-events-heading">Mega Events</h1>
        <div className="mega-events-cards-container">
          <MegaCard
            title="Prarambh"
            date="Coming Soon..."
            desc=" The Freshers Welcome Event of Techno Main Salt Lake organized by Team Ankuran"
            link="freshers"
            img={FreshersMega}
          />
          <MegaCard
            title="Anakhronos"
            date="Coming Soon..."
            desc=" The Annual Cultural Fest of Techno Main Salt Lake organized by Team Ankuran"
            link="anakhronos"
            img={Anakhronos}
          />
        </div>
      </div>
    </section>
  );
};

export default MegaEvent;
