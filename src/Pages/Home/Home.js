import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Services></Services>
        </div>
    );
};

export default Home;