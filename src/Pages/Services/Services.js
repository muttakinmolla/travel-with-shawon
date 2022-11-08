import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='container'>
            <h1 className='text-center p-5'>My Services</h1>
            <div className="row">
                {
                    services.slice(0, 3).map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
                {/* <div className='text-center mt-4 mb-4'>
                    <Link to='/services' className='btn btn-outline-success w-25 m-auto'>More Services</Link>

                </div> */}
            </div>
        </div>
    );
};

export default Services;