import React, { useEffect, useState } from 'react';
import SectionTitel from '../../ShareLayout/SectionTitle/SectionTitel';
import ChefRecomandCard from './ChefRecomandCard';

const ChefRecomand = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/chefRecomand')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])




    return (
        <section className='my-16'>
            <SectionTitel
                heading="CHEF RECOMMENDS"
                subHeading="Should Try"
            ></SectionTitel>

            <div className='grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    chefData?.map(item => <ChefRecomandCard
                        key={item._id}
                        item={item}
                    >
                    </ChefRecomandCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecomand;