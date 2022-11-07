import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Services from '../Services/Services';
import TravelBlog from '../TravelBlog/TravelBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Booking></Booking>
            <Services></Services>
            <TravelBlog></TravelBlog>
        </div>
    );
};

export default Home;