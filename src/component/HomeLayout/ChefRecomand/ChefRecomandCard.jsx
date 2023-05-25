import React from 'react';

const ChefRecomandCard = ({ item }) => {

    const { name, description, imageURL } = item || {}



    return (
        <>
            <div className="card w-full bg-[#F3F3F3] shadow">
                <figure><img src={imageURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions mt-4 justify-center">
                        <button className="btn btn-primary bg-[#1F2937]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefRecomandCard;