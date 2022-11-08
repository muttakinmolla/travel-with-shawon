import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Services from '../Services/Services';
import TravelBlog from '../TravelBlog/TravelBlog';

const Home = () => {
    useTitle('Home')
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