import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Beers from '../components/Beers';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Beers />
        </div>
    );
};

export default Home;
