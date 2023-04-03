import React from 'react';
import MegaCard from './MegaEventCard';
import './MegaEvent.scss';

const MegaEvent = () => {
  return (
    <section class="mega-events-section timeline bgcolour">
      <div class="section-container">
        <MegaCard
          title="Prarambha"
          date="25 MAY 2023"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa
          ratione omnis alias cupiditate saepe atque totam aperiam sed nulla
          voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias,
          ullam."
          link="freshers"
        />
        <MegaCard
          title="Anakhronos"
          date="25 MAY 2023"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa
          ratione omnis alias cupiditate saepe atque totam aperiam sed nulla
          voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias,
          ullam."
          link="anakhronos"
        />
      </div>
    </section>
  );
};

export default MegaEvent;
