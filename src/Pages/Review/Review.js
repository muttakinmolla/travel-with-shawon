import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import './review.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Review = ({ revw }) => {
    const { _id, service_id, review, name, imageUrl, rating } = revw;
    console.log(_id)

    const currentRoute = window.location.pathname;
    return (
        <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
            <div className='col-2'>
                <div className=''>
                    <PhotoProvider>
                        <PhotoView src={imageUrl}>
                            <img src={imageUrl} className='review' alt="" />

                        </PhotoView>
                    </PhotoProvider>
                </div>
                <p>{name}</p>
            </div>
            <div className='col-7'>
                <p>{review}</p>
            </div>
            <div className='col-2'>
                <p><FontAwesomeIcon icon={faStar} className="text-warning"></FontAwesomeIcon>{rating}</p>
            </div>
            <div className='col-1'>
                <Link to={`/updateReview/${_id}`}>{currentRoute === '/myReview' && <FontAwesomeIcon icon={faEdit} className="text-warning"></FontAwesomeIcon>}</Link>
            </div>

            <hr />
        </div>

    );
};

export default Review;