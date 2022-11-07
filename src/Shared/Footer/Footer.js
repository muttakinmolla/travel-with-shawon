import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faCalendarDay, faDollar, faStar } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" >
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5 text-center text-lg-start">
                        <Link to="" className="navbar-brand">
                            <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
                        </Link>
                        <p>Travel with shawon. explore country or worldwide. know the history o historical places.</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3" >Follow Us</h6>
                       
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 text-center text-lg-start">
                        <h5 className="text-white text-uppercase mb-4" >Our Services</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" to="#">About</Link>
                            <Link className="text-white-50 mb-2" to="#">Destination</Link>
                            <Link className="text-white-50 mb-2" to="#">Services</Link>
                            <Link className="text-white-50 mb-2" to="#">Packages</Link>
                            <Link className="text-white-50 mb-2" to="#">Guides</Link>
                            <Link className="text-white-50 mb-2" to="#">Testimonial</Link>
                            <Link className="text-white-50" to="#">Blog</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 text-center text-lg-start">
                        <h5 className="text-white text-uppercase mb-4">Usefull Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" to="#">About</Link>
                            <Link className="text-white-50 mb-2" to="#">Destination</Link>
                            <Link className="text-white-50 mb-2" to="#">Services</Link>
                            <Link className="text-white-50 mb-2" to="#">Packages</Link>
                            <Link className="text-white-50 mb-2" to="#">Guides</Link>
                            <Link className="text-white-50 mb-2" to="#">Testimonial</Link>
                            <Link className="text-white-50" to="#">Blog</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 text-center text-lg-start">
                        <h5 className="text-white text-uppercase mb-4">Contact Me</h5>
                        <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon><span className='ms-2'>Lohagara, Narail, Bangladesh</span></p>
                        <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span className='ms-2'>+088 01711-338153</span></p>
                        <p><FontAwesomeIcon icon={faMailBulk} className=''></FontAwesomeIcon><span className='ms-2'>muttakinmmolla@gmail.com</span></p>
                        <h6 className="text-white text-uppercase mt-4 mb-3" >Newsletter</h6>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-light" laceholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-3">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white-50">Copyright &copy; <Link to="#">Muttakin</Link><Link>. All Rights Reserved.</Link>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <p className="m-0 text-white-50">Designed & Developed by <Link to="/">Md. Muttakin Molla</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;