import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/assets/home/01.jpg"
import img2 from "../../../assets/assets/home/02.jpg"
import img3 from "../../../assets/assets/home/03.png"
import im4 from "../../../assets/assets/home/04.jpg"
import im5 from "../../../assets/assets/home/05.png"
import im6 from "../../../assets/assets/home/06.png"

const Cover = () => {
    return (
        <div className='mx-auto text-center'>
            <Carousel >
                <div >
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={im4} />
                </div>
                <div>
                    <img src={im5} />
                </div>
                <div>
                    <img src={im6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Cover;