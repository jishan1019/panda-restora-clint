import React, { useEffect, useState } from 'react';
import SectionTitel from '../../ShareLayout/SectionTitle/SectionTitel';
import MenuitemCard from '../../ShareLayout/MenuItemCard/MenuitemCard';
import useMenu from '../../../CustomHooks/useMenu';

const FromOurMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(items => {
    //             const popularData = items.filter(item => item.category === 'popular')
    //             setMenu(popularData)
    //         })
    // }, [])

    const [menu] = useMenu();
    const popular = menu?.filter(item => item.category === 'popular')



    return (
        <section className='my-16'>
            <SectionTitel heading="FROM OUR MENU" subHeading="Check it out" />

            <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
                {
                    popular?.map(item => <MenuitemCard
                        key={item._id}
                        item={item}
                    ></MenuitemCard>)
                }
            </div>

        </section>
    );
};

export default FromOurMenu;