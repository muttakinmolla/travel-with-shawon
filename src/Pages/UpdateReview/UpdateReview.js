import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';

const UpdateReview = () => {
    const reviews = useLoaderData();
    const { _id, name, imageUrl, review, rating, service_id, } = reviews;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleUpdateReview = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const imageUrl = form.imageUrl.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const newReview = {
            service_id: service_id,
            email: user.email,
            name: name,
            imageUrl: imageUrl,
            rating: rating,
            review: review
        }
        console.log(newReview)

        fetch(`https://travel-with-shawon-server.vercel.app/reviewUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    e.target.reset();
                    navigate(`/myReview`)
                    toast.success('your comment successfully updated');
                }
            })
    }
    return (
        <div className='container'>
            <h3 className='text-center bg-success w-25 m-auto rounded mt-4 text-white p-2'>Update Comment Here</h3>
            <div className="row mt-5">
                <div className="col-lg-6 m-auto mb-5">
                    <form onSubmit={handleUpdateReview}>
                        <div className="mb-3">
                            <input type="text" className="form-control" defaultValue={name} name='name' placeholder="write your name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" defaultValue={imageUrl} name='imageUrl' placeholder="Put your Image link" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" defaultValue={rating} name='rating' placeholder="give rating" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name='review' defaultValue={review} placeholder='write your comment' rows="3"></textarea>
                        </div>
                        <input type="submit" className="btn btn-success px-5" value='add' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateReview;