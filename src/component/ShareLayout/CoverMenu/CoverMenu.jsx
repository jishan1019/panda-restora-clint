import React from 'react';

const CoverMenu = ({ img, coverTitle, coverDescription }) => {
    return (
        <>
            <div className="hero py-16 md:py-36 px-8 md:px-16 " style={{ backgroundImage: `url(${img})` }}>


                <div className="hero-overlay rounded-md bg-black bg-opacity-70 "></div>
                <div className="hero-content text-center text-neutral-content py-24">
                    <div className="max-w-md">
                        <h1 className="mb-5 uppercase text-4xl text-white font-semibold">{coverTitle}</h1>
                        <p className="mb-5 uppercase text-xl text-white ">{coverDescription}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CoverMenu;