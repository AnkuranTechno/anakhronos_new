// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {arrow} from "../../../../constants/anakhronosImg"
import "swiper/css/pagination";
import "./Gallery.scss";
import { anakhImg1, anakhImg2, anakhImg3,anakhImg4,anakhImg5,anakhImg6,anakhImg7,anakhImg8,anakhImg9,anakhImg10,anakhImg11,anakhImg12,anakhImg13,anakhImg14,anakhImg15,anakhImg16,anakhImg17,anakhImg18,anakhImg19,anakhImg20,anakhImg21,anakhImg22,anakhImg23,anakhImg24,anakhImg25,anakhImg26,anakhImg27,anakhImg28,anakhImg29} from "../../../../constants/anakhronosImg";
import { useState } from "react";

const data = [
  {
    img: anakhImg1,
    id: 1,
  },
  {
    img: anakhImg2,
    id: 2,
  },
  {
    img: anakhImg3,
    id: 3,
  },
  {
    img: anakhImg4,
    id: 4,
  },
  {
    img: anakhImg5,
    id: 5,
  },
  {
    img: anakhImg6,
    id: 6,
  },
  {
    img: anakhImg7,
    id: 7,
  },
  {
    img: anakhImg8,
    id: 8,
  },
  {
    img: anakhImg9,
    id: 9,
  },
  {
    img: anakhImg10,
    id: 10,
  },
  {
    img: anakhImg11,
    id: 11,
  },
  {
    img: anakhImg12,
    id: 12,
  },
  {
    img: anakhImg13,
    id: 13,
  },
  {
    img: anakhImg14,
    id: 14,
  },
  {
    img: anakhImg15,
    id: 15,
  },
  {
    img: anakhImg16,
    id: 16,
  },
  {
    img: anakhImg17,
    id: 17,
  },
  {
    img: anakhImg18,
    id: 18,
  },
  {
    img: anakhImg19,
    id: 19,
  },
  {
    img: anakhImg20,
    id: 20,
  },
  {
    img: anakhImg21,
    id: 21,
  },
  {
    img: anakhImg22,
    id: 22,
  },
  {
    img: anakhImg23,
    id: 23,
  },
  {
    img: anakhImg24,
    id: 24,
  },
  {
    img: anakhImg25,
    id: 25,
  },
  {
    img: anakhImg26,
    id: 26,
  },
  {
    img: anakhImg27,
    id: 27,
  }, {
    img: anakhImg28,
    id: 28,
  },{
    img: anakhImg29,
    id: 29,
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
            <img src={arrow} alt="next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
