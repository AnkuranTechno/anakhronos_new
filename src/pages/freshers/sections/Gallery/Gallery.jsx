// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Gallery.scss";
import { freImg1,freImg2,freImg3,freImg4,freImg5,arrow } from "../../../../constants/freshersImg";
import { useState } from "react";

const data = [
  {
    img: freImg1,
    id: 1,
  },
  {
    img: freImg2,
    id: 2,
  },
  {
    img: freImg3,
    id: 3,
  },
  {
    img: freImg4,
    id: 4,
  },
  {
    img: freImg5,
    id: 5,
  },   
  {
    img: freImg1,
    id: 6,
  },
   {
    img: freImg2,
    id: 7,
  }, 
  {
    img: freImg3,
    id: 8,
  }, 

  
];
const Gallery = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <div className="app__section gallery bgcolour_gallery" id="gallery">
      <h1 className="app__section-container">Gallery</h1>

      <div className="swiper">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          // modules={[]}
          className="mySwiper"
        >
          <div className=" container">
            {data.map((item, id) => {
              return (
                <div className="item" key={id}>
                  <SwiperSlide className="swiper__slide">
                    <img
                      className="swiper__image"
                      key={id}
                      src={item.img}
                      alt=""
                    />
                  </SwiperSlide>
                </div>
              );
            })}
          </div>
          <div className="swiper__arrow" onClick={nextHandler}>
            <img src={arrow} alt="" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
