import React from 'react';
import { Link } from 'react-router-dom';
import { anakhImg1 } from '../../../../constants/anakhronosImg';

const MegaCard = ({ title, date, desc, link ,img}) => {
  return (
    <div class="timeline-item">
      <div class="timeline-img"></div>

      <div class="timeline-content timeline-card js--fadeInRight">
        <div class="timeline-img-header">
          <div  className='imagess'>
           <img src={img} alt=''/>
          </div>
          <h2>{title}</h2>
        </div>
        <div class="date">{date}</div>
        <p>{desc}</p>
        <Link class="mega-events-a bnt-more" to={`/${link}`}>
          Go to {title}
        </Link>
      </div>
    </div>
  );
};

export default MegaCard;
