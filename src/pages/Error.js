import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Error = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1 className="error">Error 404 - OUCH! You got lost my friend! </h1>
        </div>
    );
};

export default Error;
