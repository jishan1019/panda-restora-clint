import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/assets/home/slide1.jpg"
import img2 from "../../../assets/assets/home/slide2.jpg"
import img3 from "../../../assets/assets/home/slide3.jpg"
import img4 from "../../../assets/assets/home/slide4.jpg"
import img5 from "../../../assets/assets/home/slide5.jpg"
import SectionTitel from '../../ShareLayout/SectionTitle/SectionTitel';


const SwipCard = () => {
    return (
        <section className='my-16'>

            <SectionTitel
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}

            >
            </SectionTitel>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl text-center hidden md:block -mt-20 text-white uppercase'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-4xl text-center -mt-20 hidden md:block text-white uppercase'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-4xl text-center -mt-20 hidden md:block text-white uppercase'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-4xl text-center -mt-20 hidden md:block text-white uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-4xl text-center -mt-16 hidden md:block text-white uppercase'>SuPUS</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default SwipCard;