import React from 'react';
import { Link } from 'react-router-dom';
import TravelBolgImage1 from '../../assets/images/blog-1.jpg';
import TravelBolgImage2 from '../../assets/images/blog-2.jpg';
import TravelBolgImage3 from '../../assets/images/blog-3.jpg';
import './TravelBlog.css';

const TravelBlog = () => {
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" >My Travel Blog</h6>
                        <h1>Latest From My Traveling Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src={TravelBolgImage1} alt=""/>
                                        <div className="blog-date">
                                            <h6 className="font-weight-bold mb-n1">01</h6>
                                            <small className="text-white text-uppercase">Jan</small>
                                        </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Shawon</Link>
                                        <span className="text-primary px-2">|</span>
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</Link>
                                    </div>
                                    <Link className="h5 m-0 text-decoration-none" href="">A Massive 7 days Maldivs tour in this year</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src={TravelBolgImage2} alt=""/>
                                        <div className="blog-date">
                                            <h6 className="font-weight-bold mb-n1">01</h6>
                                            <small className="text-white text-uppercase">Jan</small>
                                        </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Shawon</Link>
                                        <span className="text-primary px-2">|</span>
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</Link>
                                    </div>
                                    <Link className="h5 m-0 text-decoration-none" href="">Excellent tour of indonasia for 10 days with 2 American Clients.</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src={TravelBolgImage3} alt=""/>
                                        <div className="blog-date">
                                            <h6 className="font-weight-bold mb-n1">01</h6>
                                            <small className="text-white text-uppercase">Jan</small>
                                        </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Shawon</Link>
                                        <span className="text-primary px-2">|</span>
                                        <Link className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</Link>
                                    </div>
                                    <Link className="h5 m-0 text-decoration-none" href="">Australia tour with 1 canadian client for 10 days.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelBlog;