import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';

import SingleService from './SingleService';

const Services = () => {
    const { serviceLimit } = useContext(AuthContext);
    const services = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center p-5'>My Services</h1>
            <div className="row">
                {
                    serviceLimit ? services.slice(0, 3).map(service => <SingleService service={service} key={service._id}></SingleService>) : services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }

            </div>
        </div>
    );
};

export default Services;