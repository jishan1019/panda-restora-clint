import React, { useEffect, useState } from 'react';
import SectionTitel from '../../ShareLayout/SectionTitle/SectionTitel';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testomonial = () => {

    const [review, setRevew] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setRevew(data))
    }, [])


    return (
        <section className='my-16'>
            <SectionTitel
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            />

            <div >
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        review?.map(revew => <SwiperSlide
                            key={revew._id}
                        >
                            <div className='m-24 flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={revew?.rating}
                                    readOnly
                                />
                                <div className='py-8' >
                                    <p>{revew?.details}</p>
                                    <h3 className='text-2xl text-orange-500 text-center' >{revew?.name}</h3>
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testomonial;