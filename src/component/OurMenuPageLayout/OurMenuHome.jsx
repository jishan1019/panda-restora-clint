import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../ShareLayout/CoverMenu/CoverMenu';
import img from "../../assets/assets/menu/banner3.jpg"
import FromOurMenu from '../HomeLayout/FromOurMenuSection/FromOurMenu';
import img1 from "../../assets/assets/home/chef-service.jpg"
import useMenu from '../../CustomHooks/useMenu';
import SectionTitel from '../ShareLayout/SectionTitle/SectionTitel';
import MenuitemCard from '../ShareLayout/MenuItemCard/MenuitemCard';

const OurMenuHome = () => {

    const [menu] = useMenu();
    const offered = menu?.filter(item => item.category === 'offered')
    const dessert = menu?.filter(item => item.category === 'dessert')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const salad = menu?.filter(item => item.category === 'salad')
    const soup = menu?.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <CoverMenu
                img={img}
                coverTitle="OUR MENU"
                coverDescription="Would you like to try dish?"
            >
            </CoverMenu>

            {/* Today Offer */}
            <SectionTitel
                heading="TODAY'S OFFER"
                subHeading="Don't miss"
            />
            <div className='grid md:grid-cols-2 my-10 gap-8 grid-cols-1'>
                {
                    offered?.map(item => <MenuitemCard
                        key={item._id}
                        item={item}
                    ></MenuitemCard>)
                }
            </div>

            {/* dessert */}
            <CoverMenu
                img={img1}
                coverTitle="DESSERTS"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>

            <div className='grid md:grid-cols-2 my-10 gap-8 grid-cols-1'>
                {
                    dessert?.map(item => <MenuitemCard
                        key={item._id}
                        item={item}
                    ></MenuitemCard>)
                }
            </div>

            {/* Pizza */}
            <CoverMenu
                img={img1}
                coverTitle="Pizza"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>
            <div className='grid md:grid-cols-2 my-10 gap-8 grid-cols-1'>
                {
                    pizza?.map(item => <MenuitemCard
                        key={item._id}
                        item={item}
                    ></MenuitemCard>)
                }
            </div>

            {/* Pizza */}
            <CoverMenu
                img={img1}
                coverTitle="SALADS"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>
            <div className='grid md:grid-cols-2 my-10 gap-8 grid-cols-1'>
                {
                    salad?.map(item => <MenuitemCard
                        key={item._id}
                        item={item}
                    ></MenuitemCard>)
                }
            </div>
        </div>
    );
};

export default OurMenuHome;