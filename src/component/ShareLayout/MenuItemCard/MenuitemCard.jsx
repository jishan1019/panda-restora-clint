import React from 'react';

const MenuitemCard = ({ item }) => {

    const { name, image, recipe, price } = item || {}


    return (
        <div className='flex justify-center items-center flex-col text-left md:flex-row  space-x-4 space-y-2 md:space-y-0'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase font-semibold'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuitemCard;