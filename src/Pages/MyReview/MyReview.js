import { faEdit, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';
import Review from '../Review/Review';

const MyReview = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://travel-with-shawon-server.vercel.app/reviews?email=${user?.email}`, {
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

            <h3 className='text-center mt-2 mb-5 text-success'>My All Review</h3>
            <div className="row">
                <div className="col-6 m-auto">
                    {
                        reviews.map(review => <Review revw={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReview;