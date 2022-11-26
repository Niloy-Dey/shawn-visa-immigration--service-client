import React from 'react';
import Banner from './Banner';
import Contact from '../Contact/Contact';
import HappyClient from './HappyClient';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HappyClient></HappyClient>
            <Contact></Contact>
        </div>
    );
};

export default Home;