import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import './review.css';

const Review = ({ revw }) => {
    const { _id, service_id, review, name, imageUrl, rating } = revw;
    
    const currentRoute = window.location.pathname;
    console.log(currentRoute)
    return (
        <div className='row '>
            <div className='col-lg-2'>
                <div className=''>
                    <img src={imageUrl} className='review' alt="" />
                </div>
                <p>{name}</p>
            </div>
            <div className='col-lg-8'>
                <p>{review}</p>
            </div>
            <div className='col-lg-2'>
                <p><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>{rating}</p>
            </div>
            <div className='col-lg-2'>
                { currentRoute === '/myReview' &&<FontAwesomeIcon icon={faEdit} className="text-warning"></FontAwesomeIcon>}
            </div>
          
            <hr />
        </div>

    );
};

export default Review;