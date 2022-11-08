import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/images/404-error-page-templates.png';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('404-error page not found')
    return (
        <div className='container'>
            <div className='mb-5 pb-5 m-auto'>
                <div className='text-center'>
                    <img src={ErrorImage} className='img-fluid w-75' alt="" />
                    <div className='text-center'>
                        <Link to='/' className='btn btn-success'>Go To Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;