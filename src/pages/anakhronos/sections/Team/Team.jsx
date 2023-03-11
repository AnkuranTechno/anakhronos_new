import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import {
  Aniket,
  Keshav,
  Yesh,
  Evan,
  Chandan,
  Rudrajit,
  Sahel,
  Somya,
  Abhijeet,
  Suchetana,
  Soham,
  Bidyayan,
  Oishi,
  Hrishav,
  Iman,
  Dhruba,
  Pratyush,
  Shatavisha,
  ADutta,
  Punjay,
  Agnish,
  Nabanita,
  Bishal,
  Sourajit,
  Abir,
  Arpita,
  Asen,
} from "../../../../constants/images";
import "./Team.scss";

function Team() {
  return (
    <div className="app__section team bgcolour_teams" id="team">
      <div className="app__section-container team-container">
        <h1>Our Team</h1>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={Aniket} alt="Aniket" />
              <div className="info">
                <h2>Aniket Singh</h2>
                <h3>Convenor</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Keshav} alt="Keshav" />
              <div className="info">
                <h2>Keshav Vashist</h2>
                <h3>Co-Convenor</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Yesh} alt="Yesh" />
              <div className="info">
                <h2>Yesh Jha</h2>
                <h3>Co-Convenor</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Evan} alt="Evan" />
              <div className="info">
                <h2>Evan Bose</h2>
                <h3>Promotion Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Chandan} alt="Chandan" />
              <div className="info">
                <h2>Chandan Kumar</h2>
                <h3>Promotion Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rudrajit} alt="Rudrajit" />
              <div className="info">
                <h2>Rudrajit Sengupta</h2>
                <h3>Sponsorship Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Sahel} alt="Sahel" />
              <div className="info">
                <h2>Sahel Majumder</h2>
                <h3>Management Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Somya} alt="Somya" />
              <div className="info">
                <h2>Somya Shekhar</h2>
                <h3>Audition Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Abhijeet} alt="Abhijeet" />
              <div className="info">
                <h2>Abhijeet Raj</h2>
                <h3>Audition Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Suchetana} alt="Suchetana" />
              <div className="info">
                <h2>Suchetana Dasgupta</h2>
                <h3>Enigma Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Soham} alt="Soham" />
              <div className="info">
                <h2>Soham Sur</h2>
                <h3>Inaugration Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bidyayan} alt="Bidyayan" />
              <div className="info">
                <h2>Bidyayan Goswami</h2>
                <h3>Music Society Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Oishi} alt="Oishi" />
              <div className="info">
                <h2>Oishi Panda</h2>
                <h3>Music Society Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Hrishav} alt="Hrishav" />
              <div className="info">
                <h2>Hrishav Banik</h2>
                <h3>Dance Society Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Iman} alt="Iman" />
              <div className="info">
                <h2>Iman Majumdar</h2>
                <h3>Dance Society Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Dhruba} alt="Dhruba" />
              <div className="info">
                <h2>Dhruba Roy</h2>
                <h3>Media Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pratyush} alt="Pratyush" />
              <div className="info">
                <h2>Pratyush Biswakarma</h2>
                <h3>Media Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Shatavisha} alt="Shatavisha" />
              <div className="info">
                <h2>Shatavisha Banerjee</h2>
                <h3>Digital Design Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={ADutta} alt="ADutta" />
              <div className="info">
                <h2>Ayush Dutta</h2>
                <h3>Photo/Videography Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Punjay} alt="Punjay" />
              <div className="info">
                <h2>Punjay Chetan Sharma</h2>
                <h3>Editorial Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Agnish} alt="Agnish" />
              <div className="info">
                <h2>Agnish Ghosh</h2>
                <h3>Mr & Ms Freshers Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Nabanita} alt="Nabanita" />
              <div className="info">
                <h2>Nabanita Saha</h2>
                <h3>Panache Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bishal} alt="Bishal" />
              <div className="info">
                <h2>Bishal Poddar</h2>
                <h3>Panache Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Sourajit} alt="Sourajit" />
              <div className="info">
                <h2>Sourajit Mukherjee</h2>
                <h3>Web Development Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Abir} alt="Abir" />
              <div className="info">
                <h2>Abir Gayen</h2>
                <h3>Web Development Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Arpita} alt="Arpita" />
              <div className="info">
                <h2>Arpita Mitra</h2>
                <h3>Registration Head</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Asen} alt="Asen" />
              <div className="info">
                <h2>Ayush Sen</h2>
                <h3>Registration Head</h3>
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
