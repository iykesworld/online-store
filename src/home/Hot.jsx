import React, { useRef } from 'react'
import './Home.css'
import hotone from '../assets/Hot-rightnow-frame1.png'
import hottwo from '../assets/Hot-rightnow-frame2.png'
import hotthree from '../assets/Hot-rightnow-frame3.png'
import hotfour from '../assets/Hot-rightnow-frame4.png'
import { Link } from "react-router-dom";
// my swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const Hot = () => {
    const SlideRef = useRef();

    const handleNext = ()=>{
        SlideRef.current.swiper.slideNext();
    }
    const handlePrev = ()=>{
        SlideRef.current.swiper.slidePrev();
    }
  return (
    <div className='hot'>
        <h1>HOT RIGHT NOW</h1>
        <p>Embrace the essence of effortless style and unmatched comfort
        with our collection</p>
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
        <img src={hotone} alt="" />
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={hottwo} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $200.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={hotthree} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $300.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={hotfour} alt="" />
        <p>Geneva Off Shoulder $180.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={hotone} alt="" />
        <p>LARA Fluted Sleeve Rose Button Mini Dress $120.00</p>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/shop" className="link-collection">
        <img src={hottwo} alt="" />
        <p>LACEY Pleated One Shoulder Mudi Dress $200.00</p>
        </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Hot