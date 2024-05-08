import React from "react";
import data from "../data.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation"

import "../styles/slider.css";

// import required modules
import { Autoplay, Navigation, Grid, Pagination } from "swiper";

export default function Carousel() {
  return (
    <div className="backgorund-slider">
      <div>
        <h1 className="title-slider">Most popular Tineraries</h1>
      </div>
      <Swiper
        slidesPerGroup={2}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Grid, Pagination]}
        className="mySwiper"
      >
        { data.map(location =>{ 
            return(
            <SwiperSlide className= "mySwiper" key={location.id} style={{backgroundImage:`url("${location.imagen}")`,backgroundPosition:"center" , backgroundSize:"cover"}}> 
              <div>
                <p className="text-slider">{location.city}</p>
                <p className="text-slider">{location.countries}</p>
              </div>
            </SwiperSlide>
        )})
        }
      </Swiper>
    </div>
  );
}
