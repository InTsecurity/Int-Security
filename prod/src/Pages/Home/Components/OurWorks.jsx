import React from "react";
import "./../Styles/OurWorks.css";
import logo from "./../../../assets/logo.png";

//Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

//Swiper css
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function OurWorks() {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "5rem",
    overflow: "scroll",
  };

  return (
    <div className="swiper">
      <Swiper
        style={{
          marginTop: "11vh",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
      >
        <SwiperSlide style={styles}>1</SwiperSlide>
        <SwiperSlide style={styles}>
          <img src="logo" alt="logo" />
        </SwiperSlide>
        <SwiperSlide style={styles}>3</SwiperSlide>
        <SwiperSlide style={styles}>4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurWorks;
