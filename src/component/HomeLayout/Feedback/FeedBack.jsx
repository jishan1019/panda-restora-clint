import React from 'react';
import img from "../../../assets/assets/home/chef-service.jpg"

const FeedBack = () => {
    return (
        <>
            <div className="hero my-24 py-16 px-16 " style={{ backgroundImage: `url(${img})` }}>


                <div className="hero-overlay rounded-md bg-white "></div>
                <div className="hero-content text-center text-neutral-content py-24">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-black font-semibold">Bistro Boss</h1>
                        <p className="mb-5 text-black ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedBack;