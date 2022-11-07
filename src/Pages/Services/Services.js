import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/package-1.jpg';
import { faCalendarDay, faDollar, faLocationPin, faStar } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className='container'>
            <h1 className='text-center p-5'>My Services</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center pb-2 text-primary">Card title</h5>
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faLocationPin}></FontAwesomeIcon>
                                    <p className='m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faCalendarDay}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faDollar}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                            </div>
                            <p className="mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr />
                            <div className='d-flex align-items-center justify-content-between'>
                                <Link to="#" className="btn btn-success">Show Details</Link>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon><span>(4)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center pb-2 text-primary">Card title</h5>
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faLocationPin}></FontAwesomeIcon>
                                    <p className='m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faCalendarDay}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faDollar}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                            </div>
                            <p className="mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr />
                            <div className='d-flex align-items-center justify-content-between'>
                                <Link to="#" className="btn btn-success">Show Details</Link>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon><span>(4)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center pb-2 text-primary">Card title</h5>
                            <div className="d-flex justify-content-between align-items-center pt-2 pb-2">
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faLocationPin}></FontAwesomeIcon>
                                    <p className='m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faCalendarDay}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                                <div className="text-center">
                                    <FontAwesomeIcon className='text-primary' icon={faDollar}></FontAwesomeIcon>
                                    <p className='p-0 m-0'>cox's bazar</p>
                                </div>
                            </div>
                            <p className="mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr />
                            <div className='d-flex align-items-center justify-content-between'>
                                <Link to="#" className="btn btn-success">Show Details</Link>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'></FontAwesomeIcon><span>(4)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4 mb-4'>
                    <button className='btn btn-outline-success w-25 m-auto'>More Services</button>

                </div>
            </div>
        </div>
    );
};

export default Services;