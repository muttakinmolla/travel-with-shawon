import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import './review.css';
import { Link } from 'react-router-dom';

const Review = ({ revw }) => {
    const { _id, service_id, review, name, imageUrl, rating } = revw;

    const currentRoute = window.location.pathname;
    return (
        <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
            <div className='col-lg-2'>
                <div className=''>
                    <img src={imageUrl} className='review' alt="" />
                </div>
                <p>{name}</p>
            </div>
            <div className='col-lg-7'>
                <p>{review}</p>
            </div>
            <div className='col-lg-2'>
                <p><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>{rating}</p>
            </div>
            <div className='col-lg-1'>
                <Link>{currentRoute === '/myReview' && <FontAwesomeIcon icon={faEdit} className="text-warning"></FontAwesomeIcon>}</Link>
            </div>

            <hr />
        </div>

    );
};

export default Review;