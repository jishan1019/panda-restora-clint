import React from 'react';
import Cover from './Cover/Cover';
import SwipCard from './SwipComponent/SwipCard';
import FeedBack from './Feedback/FeedBack';
import FromOurMenu from './FromOurMenuSection/FromOurMenu';

const Home = () => {
    return (
        <div>
            <Cover />
            <SwipCard />
            <FeedBack />
            <FromOurMenu />
        </div>
    );
};

export default Home;