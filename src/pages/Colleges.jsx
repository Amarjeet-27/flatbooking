import React from "react";
import SingleCard from "../SingleCard";
import collegeData from "./CollegeData.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Colleges = () => {
  return (
    <div className="section" style={{ marginBottom: 40 }}>
      <h2 style={{ fontWeight: 600 }}>Colleges</h2>
      <div style={{ display: "flex", gap: 15, flex: "wrap" }}>
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
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          //   style={{ display: "flex" }}
        >
          {collegeData?.map((data, ind) => (
            <SwiperSlide>
              <SingleCard image={data.image} name={data.name} key={ind} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Colleges;
