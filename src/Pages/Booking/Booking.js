import React from 'react';
import aboutImage from '../../assets/images/about.jpg';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';

const Booking = () => {
    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 object-fit" src={aboutImage} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5 ">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5 shadow-lg p-3 mb-5 bg-body rounded">
                                <h6 className="text-primary text-uppercase">About Me</h6>
                                <h1 className="mb-3">I Provide Best Tour Guide In Your Budget</h1>
                                <p>I will be your touring guide and show you unique places that you don't know. From first to last I'll stay with you in every situation.</p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src={aboutImage1} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src={aboutImage2} alt="" />
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary mt-1">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;