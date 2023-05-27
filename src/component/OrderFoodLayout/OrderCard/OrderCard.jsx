import React from 'react';

const OrderCard = ({ item }) => {
    const { name, recipe, image, price } = item || {}

    return (
        <>
            <div className="card w-full bg-[#F3F3F3] shadow">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className='mt-2 font-semibold'>Prise: ${price}</p>
                    <div className="card-actions mt-4 justify-center">
                        <button className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 hover:bg-[#1F2937]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCard;