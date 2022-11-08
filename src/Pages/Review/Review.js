import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import './review.css';

const Review = ({ revw }) => {
    const { _id, service_id, review, name, imageUrl, rating } = revw;
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className=''>
                <div className='text-center'>
                    <img src={imageUrl} className='review' alt="" />
                </div>
                <p>{name}</p>
            </div>
            <div>
                <p>{review}</p>
            </div>
            <div>
                <p><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>{rating}</p>
            </div>
            <div>
                <button className='btn btn-warning'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
            </div>
           
        </div>
    );
};

export default Review;