import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddComment = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const service = useLoaderData();
    const { _id } = service;
    const [reviewer, setReviewer] = useState();
    useTitle('comment')

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageUrl = form.imageUrl.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const newUser = {
            service_id: _id,
            name: name,
            email: user.email,
            imageUrl: imageUrl,
            rating: rating,
            review: review
        }
        setReviewer(newUser);
        console.log(reviewer);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    e.target.reset();
                    toast.success('your comment successfully added');
                }
            })
    }


    return (
        <div className='container'>
            <h3 className='text-center bg-success w-25 m-auto rounded mt-4 text-white p-2'>Add a Comment Here</h3>
            <div className="row mt-5">
                <div className="col-lg-6 m-auto mb-5">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="form-control" name='name' placeholder="write your name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name='imageUrl' placeholder="Put your Image link" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name='rating' placeholder="give rating" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name='review' placeholder='write your comment' rows="3"></textarea>
                        </div>
                        <input type="submit" className="btn btn-success px-5" value='add' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddComment;