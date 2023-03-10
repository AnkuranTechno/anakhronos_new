import React from 'react';
import "./MegaEventCard.css"
const MegaCard = (props) => {
    console.log({props});
    return (
        <><div className='events'>
            <div id='event-card'>
                <div className='red'>
                    <img src="https://raw.githubusercontent.com/Ankush109/anakhronos_new/master/src/assets/anakhronos/images/Prarambh.png" alt='event_image' />
                </div>
                <div className='green'>
                    <div className='title'>
                        <h2>Prarambh</h2>

                    </div>
                    <div className='desc'>
                        <p>about the event some imp details</p>
                    </div>
                </div>
            </div>

        </div><div className='events2'>
                <div id='event-card'>
                    <div className='red'>
                        <img src="https://raw.githubusercontent.com/Ankush109/anakhronos_new/master/src/assets/anakhronos/images/Prarambh.png" alt='event_image' />
                    </div>
                    <div className='green'>
                        <div className='title'>
                            <h2>Prarambh</h2>

                        </div>
                        <div className='desc'>
                            <p>about the event some imp details</p>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default MegaCard;
