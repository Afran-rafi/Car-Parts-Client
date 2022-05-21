import React from 'react';
import Business from '../Business/Business';
import CarParts from '../CarParts/CarParts';
import HomePage from '../HomePage/HomePage';
import Reviews from '../Reviews/Reviews';
import Tasty from '../Tasty/Tasty';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            <CarParts></CarParts>
            <Business></Business>
            <Reviews></Reviews>
            <Tasty></Tasty>
        </div>
    );
};

export default Home;