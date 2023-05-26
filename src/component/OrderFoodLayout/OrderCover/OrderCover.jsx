import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../../ShareLayout/CoverMenu/CoverMenu';
import img from "../../../assets/assets/shop/banner2.jpg"

const OrderCover = () => {
    return (
        <>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <CoverMenu
                img={img}
                coverTitle="ORDER FOOD"
                coverDescription="Would you like to try dish?"
            >
            </CoverMenu>
        </>
    );
};

export default OrderCover;