import React from 'react';
import aboutImage from '../../assets/images/about.jpg';
import aboutImage1 from '../../assets/images/about-1.jpg';
import aboutImage2 from '../../assets/images/about-2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h6 className="text-primary text-uppercase">About Us</h6>
                                <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
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

            <div className="container-fluid pb-5">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 min-height">
                                    <i className="fa fa-2x fa-money-check-alt text-white"></i>
                                    <FontAwesomeIcon ></FontAwesomeIcon>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Competitive Pricing</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 min-height">
                                    <i className="fa fa-2x fa-award text-white"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Best Services</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 min-height">
                                    <i className="fa fa-2x fa-globe text-white"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <h5 className="">Worldwide Coverage</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;