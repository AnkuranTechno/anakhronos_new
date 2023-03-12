import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import {
//   Aniket,
//   Keshav,
//   Yesh,
//   Evan,
//   Chandan,
//   Rudrajit,
//   Sahel,
//   Somya,
//   Abhijeet,
//   Suchetana,
//   Soham,
//   Bidyayan,
//   Oishi,
//   Hrishav,
//   Iman,
//   Dhruba,
//   Pratyush,
//   Shatavisha,
//   ADutta,
//   Punjay,
//   Agnish,
//   Nabanita,
//   Bishal,
//   Sourajit,
//   Abir,
//   Arpita,
//   Asen
// } from '../../../../constants/images';
import './Team.scss';

function Team() {
  return (
    <div className="app__section team bgcolour_teams" id="team">
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
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223775333-f7335900-500c-4d2d-83bc-f834097bace3.png`} alt="Sourajit" />
              <div className="info">
                <h2>Sourajit Mukherjee</h2>
                <h3>Web Development Head</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223774934-d639cd0f-321b-4a9a-b5de-3fc1ad43491d.png`} alt="Abir" />
              <div className="info">
                <h2>Abir Gayen</h2>
                <h3>Web Development Head</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223780995-35f4c59b-0467-4d85-95c9-bb1246ab3dd9.jpg`} alt="Sreetama" />
              <div className="info">
                <h2>Sreetama Hazra</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223781125-1dbb342f-4614-49b2-8da2-61460daf5a61.jpg`} alt="Akash" />
              <div className="info">
                <h2>Akash Gupta</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223781195-7c50d236-7d7e-4137-867d-483cffb341ac.jpg`} alt="Abhishek" />
              <div className="info">
                <h2>Abhishek</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223781678-6d54f946-16d4-470f-adde-b2fff3c63142.jpg`} alt="Souvik" />
              <div className="info">
                <h2>Souvik Saha</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/223781284-6ea390dc-7223-4d8e-bbd0-1d28eb290b9f.jpg`} alt="Asif" />
              <div className="info">
                <h2>Asif</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={`https://user-images.githubusercontent.com/102872077/224475570-51882d21-d77c-4c69-b765-b63fd6d7db14.jpeg`} alt="Ankush" />
              <div className="info">
                <h2>Ankush</h2>
                <h3>Web Developer</h3>
                <a href="#">
                  <i class="fa-brands fa-instagram "></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-phone"></i>
                </a>
              </div>
            </SwiperSlide>
            {/* <div className="slider-controller">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Team;
