import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { MemberData } from '../../../../data/events/anakhronos';
import './Team.scss';

function Team() {
  return (
    <div className="app__section team bgcolour_teams" id="anakhronos-team">
      <div className="app__section-container team-container">
        <h1>Our Team</h1>
        <div className="container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {MemberData.map((e, index) => (
              <SwiperSlide>
                <img key={index} src={e.image} alt={e.name} />
                <div className="info">
                  <h2 key={index}>{e.name}</h2>
                  <h3 key={index}>{e.description}</h3>
                  <a href="/">
                    <i class="fa-brands fa-instagram "></i>
                  </a>
                  <a href="/">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="/">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Team;
