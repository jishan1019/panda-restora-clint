import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../CustomHooks/useMenu';
import OrderCard from '../OrderCard/OrderCard';
import TabItem from './TabItem';


const OrderTab = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu?.filter(item => item.category === 'drinks')
    const dessert = menu?.filter(item => item.category === 'dessert')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const salad = menu?.filter(item => item.category === 'salad')
    const soup = menu?.filter(item => item.category === 'soup')


    return (
        <div className='text-center my-8'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="uppercase">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>

                </TabList>


                <TabPanel >
                    <TabItem item={salad} />
                </TabPanel>

                <TabPanel>
                    <TabItem item={pizza} />
                </TabPanel>

                <TabPanel>
                    <TabItem item={soup} />
                </TabPanel>

                <TabPanel>
                    <TabItem item={dessert} />
                </TabPanel>

                <TabPanel>
                    <TabItem item={drinks} />
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default OrderTab;