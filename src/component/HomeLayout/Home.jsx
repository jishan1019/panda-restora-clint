import React from 'react';
import Cover from './Cover/Cover';
import SwipCard from './SwipComponent/SwipCard';
import FeedBack from './Feedback/FeedBack';
import FromOurMenu from './FromOurMenuSection/FromOurMenu';
import CallUsComponent from './CallUsComponent/CallUsComponent';
import ChefRecomand from './ChefRecomand/ChefRecomand';

const Home = () => {
    return (
        <div>
            <Cover />
            <SwipCard />
            <FeedBack />
            <FromOurMenu />
            <CallUsComponent />
            <ChefRecomand />
        </div>
    );
};

export default Home;