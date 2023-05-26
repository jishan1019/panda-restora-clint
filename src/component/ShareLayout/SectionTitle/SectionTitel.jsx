import React from 'react';

const SectionTitel = ({ heading, subHeading }) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-8'>
            <p className='text-yellow-500 uppercase font-semibold mb-2'>--- {subHeading} ---</p>
            <h3 className='text-4xl uppercase text-black font-semibold border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitel;