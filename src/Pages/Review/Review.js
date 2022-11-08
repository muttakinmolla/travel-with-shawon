import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import './review.css';

const Review = ({ revw }) => {
    const { _id, service_id, review, name, imageUrl, rating } = revw;
    return (
        <div className='row '>
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
                <button className='btn btn-warning'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
            </div>
<hr />
        </div>

    );
};

export default Review;