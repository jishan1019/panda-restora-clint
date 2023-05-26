import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const TabItem = ({ item }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4 my-16">
            {
                item?.map(item => <OrderCard
                    key={item._id}
                    item={item}
                ></OrderCard>
                )
            }
        </div>
    );
};

export default TabItem;