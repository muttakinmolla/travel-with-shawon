import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';

import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    const currentRoute = window.location.pathname;
    return (
        <div className='container'>
            <h1 className='text-center p-5'>My Services</h1>
            <div className="row">
                {
                    currentRoute === '/' ? services.slice(0, 3).map(service => <SingleService service={service} key={service._id}></SingleService>) : services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
            <div className='text-center mt-4 mb-4'>
                {currentRoute === '/' && <Link to='/services' className='btn btn-outline-success w-25 m-auto'>More Services</Link>}

            </div>
        </div>
    );
};

export default Services;