import React from "react";
import SingleCard from "../SingleCard";
import flatDatas from "./FlatsData";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { FreeMode, Pagination } from "swiper/modules";
const Flats = () => {
  return (
    <div className="section">
      <h2 style={{ fontWeight: 600 }}>Flats and Hostels</h2>
      <div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
          spaceBetween={30}
          freeMode={true}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {flatDatas?.map((data, ind) => (
            <SwiperSlide>
              <SingleCard image={data.image} name={data.name} key={ind} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Flats;
