import React, { useRef, useState } from "react";
import "./Home.css";
import newarrivalone from "../assets/new-collection1-frame.png";
import newarrivaltwo from "../assets/new-collection4-frame.png";
import newarrivalthree from "../assets/new-collecton3-frame.png";
import newarrivalfour from "../assets/new-coolection2-frame.png";
import { Link } from "react-router-dom";
// my swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


const Newarrival = () => {
    const SlideRef = useRef();

    const handleNext = ()=>{
        SlideRef.current.swiper.slideNext();
    }
    const handlePrev = ()=>{
        SlideRef.current.swiper.slidePrev();
    }
  return (
    <div className="new-arrival">
      <h1>NEW ARRIVALS</h1>
      <p>
        Step into a new season of fashion with our cutting-edge styles and
        sophisticated designs.
      </p>
      <div className="arrows">
        <i className= "ri-arrow-right-line"  onClick={handleNext}></i>
        <i className="ri-arrow-left-line" onClick={handlePrev}></i>
      </div>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        ref={SlideRef}
      >
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivalone} alt="" />
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivaltwo} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $200.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivalthree} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $300.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivalfour} alt="" />
        <p>Geneva Off Shoulder $180.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivalone} alt="" />
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={newarrivalthree} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $200.00</p>
        </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Newarrival;


