import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
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
  Asen
} from '../../constants/images';
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



// const Team = () => {
//   return (
//     <div className="app__section team" id="team">
//       <div className="app__section-container team-container">
//         <h1>Our Team</h1>

//         <div class="container convenor">

//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Aniket} alt="Aniket Singh" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Aniket Singh
//                   <br />
//                   <span class="job-title">Convenor</span>
//                 </h2>
//               </div>
//             </div>
//           </div>


//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Keshav} alt="Keshav" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Keshav Vashist
//                   <br />
//                   <span class="job-title">Co-convenor</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Yesh} alt="Yesh" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Yesh Jha
//                   <br />
//                   <span class="job-title">Co-convenor</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="container head">

//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Evan} alt="evan" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Evan Bose
//                   <br />
//                   <span class="job-title">Promotion Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Chandan} alt="chandan" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Chandan Kumar
//                   <br />
//                   <span class="job-title">Promotion Head </span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Rudrajit} alt="Rudrajit" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Rudrajit Sengupta
//                   <br />
//                   <span class="job-title">Sponsorship Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Sahel} alt="sahel" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Sahel Majumdar
//                   <br />
//                   <span class="job-title">Management Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Somya} alt="Somya" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Somya Shekhar
//                   <br />
//                   <span class="job-title">Audition Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Abhijeet} alt="Abhijeet" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Abhijeet Raj
//                   <br />
//                   <span class="job-title">Audition Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Suchetana} alt="suchetana" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details ">
//                 <h2>Suchenata Dasgupta 
//                   <br />
//                   <span class="job-title">Enigma Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Soham} alt="soham sur" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Soham Sur
//                   <br />
//                   <span class="job-title">Inauguration Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Bidyayan} alt="Bidyayan" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Bidyayan Goswami
//                   <br />
//                   <span class="job-title">Music Society Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Oishi} alt="Oishi" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Oishi Panda
//                   <br />
//                   <span class="job-title">Music Society Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Hrishav} alt="hrishav" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Hrishav Banik
//                   <br />
//                   <span class="job-title">Dance Society Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Iman} alt="iman" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Iman Majumdar
//                   <br />
//                   <span class="job-title">Dance Society Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Dhruba} alt="Dhruba" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Dhruba Roy
//                   <br />
//                   <span class="job-title">Media Head </span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Pratyush} alt="pratyush" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Pratyush Biswakarma
//                   <br />
//                   <span class="job-title">Media Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Shatavisha} alt="shatavisha" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Shatavisha Banerjee
//                   <br />
//                   <span class="job-title">Digital Design Head </span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={ADutta} alt="Ayush Dutta" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Ayush Dutta
//                   <br />
//                   <span class="job-title">Photo/Videography Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Punjay} alt="punjay" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Punjay Sharma
//                   <br />
//                   <span class="job-title">Editorial Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Agnish} alt="agnish" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Agnish Ghosh
//                   <br />
//                   <span class="job-title">Mr & Mrs Freshers Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Nabanita} alt="nabanita" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Nabanita Saha
//                   <br />
//                   <span class="job-title">Panache Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Bishal} alt="bishal" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details jane">
//                 <h2>Bishal Poddar
//                   <br />
//                   <span class="job-title">Panache Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card">

//               <div class="card-image">
//                 <img src={Sourajit} alt="Sourajit" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Sourajit Mukherjee
//                   <br />
//                   <span class="job-title">Web Development Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Abir} alt="abir" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Abir Gayen
//                   <br />
//                   <span class="job-title">Web Development Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Arpita} alt="arpita" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Arpita Mitra
//                   <br />
//                   <span class="job-title">Registration Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div class="card-wrapper">

//             <div class="card profile-two">

//               <div class="card-image profile-img--two">
//                 <img src={Asen} alt="Ayush Sen" />
//               </div>

//               <ul class="social-icons">
//                 <li>
//                   <a href="">
//                     <i class="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="">
//                     <i class="fab fa-dribbble"></i>
//                   </a>
//                 </li>
//               </ul>

//               <div class="details">
//                 <h2>Ayush Sen
//                   <br />
//                   <span class="job-title">Registration Head</span>
//                 </h2>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>

//   );
// };

export default Team;
