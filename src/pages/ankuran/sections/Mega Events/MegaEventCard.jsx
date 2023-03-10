import React from 'react';
import "./MegaEventCard.css"
const MegaCard = (props) => {
    console.log({props});
    return (
        <div className='events'>
           <div id='event-card'>
            <div className='red'>
                    <img src={props.img} alt='event_image' />
            </div>
            <div className='green'>
                <div className='title'>
                    <h2>{props.eventname}</h2>
                 
                </div>
                  <div className='desc'>
                    <p>{props.desc}</p>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default MegaCard;
