import React from 'react';
import Cover from './Cover/Cover';
import SwipCard from './SwipComponent/SwipCard';
import FeedBack from './Feedback/FeedBack';

const Home = () => {
    return (
        <div>
            <Cover />
            <SwipCard />
            <FeedBack />
        </div>
    );
};

export default Home;