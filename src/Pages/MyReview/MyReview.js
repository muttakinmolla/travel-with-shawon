import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';
import Review from '../Review/Review';

const MyReview = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    return (
        <div className='container pt-5'>
            {
                reviews.map(review => <Review revw={review} key={review._id}></Review>)
            }
        </div>
    );
};

export default MyReview;