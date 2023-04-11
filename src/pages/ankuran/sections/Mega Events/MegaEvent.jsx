import React from 'react';
import MegaCard from './MegaEventCard';
import './MegaEvent.scss';

const MegaEvent = () => {
  return (
    <section class="mega-events-section timeline bgcolour">
      <div class="section-container">
        <h1 className="mega-events-heading">Mega Events</h1>
        <div className="mega-events-cards-container">
          <MegaCard
            title="Prarambh"
            date="Coming Soon"
            desc=" The official freshers welcome event of Techno Main Salt Lake organized by Team Ankuran"
            link="freshers"
          />
          <MegaCard
            title="Anakhronos"
            date="Coming Soon"
            desc=" The official cultural fest of Techno Main Salt Lake organized by Team Ankuran"
            link="anakhronos"
          />
        </div>
      </div>
    </section>
  );
};

export default MegaEvent;
