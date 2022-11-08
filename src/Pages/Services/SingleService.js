import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/package-1.jpg';
import { faCalendarDay, faDollar, faLocationPin, faStar } from '@fortawesome/free-solid-svg-icons';

const SingleService = ({ service }) => {
    const { days, description, imageUrl, name, price, ratting, _id } = service;
    return (
        <div className="col-lg-4 mb-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center pb-2 text-primary">{name}</h5>
                    <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                        <div className="text-center">
                            <FontAwesomeIcon className='text-primary' icon={faLocationPin}></FontAwesomeIcon>
                            <p className='m-0'>{name}</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon className='text-primary' icon={faCalendarDay}></FontAwesomeIcon>
                            <p className='p-0 m-0'>{days}</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon className='text-primary' icon={faDollar}></FontAwesomeIcon>
                            <p className='p-0 m-0'>{price}</p>
                        </div>
                    </div>
                    <p className="mt-3">{description.substring(0, 100)}...</p>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between'>
                        <Link to="#" className="btn btn-success">Show Details</Link>
                        <div>
                            <FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon><span>({ratting})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;