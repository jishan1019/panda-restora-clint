import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../ShareLayout/CoverMenu/CoverMenu';
import img from "../../assets/assets/menu/banner3.jpg"
import FromOurMenu from '../HomeLayout/FromOurMenuSection/FromOurMenu';
import img1 from "../../assets/assets/home/chef-service.jpg"

const OurMenuHome = () => {
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
            <FromOurMenu />


            <CoverMenu
                img={img1}
                coverTitle="DESSERTS"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>
            <FromOurMenu />


            <CoverMenu
                img={img1}
                coverTitle="Pizza"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>
            <FromOurMenu />


            <CoverMenu
                img={img1}
                coverTitle="SALADS"
                coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </CoverMenu>
            <FromOurMenu />


            our menu
        </div>
    );
};

export default OurMenuHome;