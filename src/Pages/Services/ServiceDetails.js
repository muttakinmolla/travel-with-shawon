import { faCalendarDay, faDollar, faLocation, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import SingleService from './SingleService';

const ServiceDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { days, description, imageUrl, name, price, ratting, _id } = service;

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                const newReviews = data.filter(review => review.service_id === _id);
                setReviews(newReviews);
            })
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-5 mt-4 mb-4">
                    <div className="card boxShadow">
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center pb-2 text-primary">{name}</h5>
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                                <div className="text-center shadow p-3 mb-5 bg-body rounded">
                                    <FontAwesomeIcon className='text-primary' icon={faLocation}></FontAwesomeIcon>
                                    <p className='m-0'>{name}</p>
                                </div>
                                <div className="text-center shadow p-3 mb-5 bg-body rounded">
                                    <FontAwesomeIcon className='text-primary' icon={faCalendarDay}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>{days} Day's</p>
                                </div>
                                <div className="text-center shadow p-3 mb-5 bg-body rounded">
                                    <FontAwesomeIcon className='text-primary' icon={faDollar}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>Price :{price}</p>
                                </div>
                            </div>
                            <p className="mt-3">{description}</p>
                            <hr />
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon><span>({ratting})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className=' d-flex justify-content-end'>
                        <Link className='btn btn-success mt-4' to={`/addComment/${_id}`}>Add a comment</Link>
                    </div>
                    <div className='mt-3 mb-3'>
                        {
                            reviews.map(review => <Review revw={review} key={review._id}></Review>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;