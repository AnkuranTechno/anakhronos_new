import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Artist.scss';
import { arrow } from '../../../../constants/images';

import { useState } from 'react';
import { Artists } from '../../../../data/events/anakhronos';

const Artist = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div
      className="app__section artist bgcolour_artist"
      id="anakhronos-artists"
    >
      <h1 className="app__section-container">Artists</h1>

      <div className="swiper">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          slidesPerView={'auto'}
          grabCursor={true}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <div className=" container">
            {Artists.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <SwiperSlide className="swiper__slide">
                    <img
                      className="swiper__image"
                      key={item.id}
                      src={item.image}
                      alt=""
                    />
                    <div className="artist-info">
                      <span>{item.name}</span>
                      <br />
                      <span>{item.year}</span>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </div>
          <div className="swiper__arrow" onClick={nextHandler}>
            <img src={arrow} alt="next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Artist;
