import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './ToopBar.css';

const TopBar = () => {
    return (
        <div>
            <div className="container-fluid bg-light pt-3 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <p><i className="fa fa-envelope mr-2"></i>muttakinmmolla@gamil.com</p>
                                <p className="text-body px-3">|</p>
                                <p><i className="fa fa-phone-alt mr-2"></i>+088 01711338153</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-primary px-3" href="">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </Link>
                                <Link className="text-primary px-3" href="">
                                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                </Link>
                                <Link className="text-primary px-3" href="">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </Link>
                                <Link className="text-primary px-3" href="">
                                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                </Link>
                                <Link className="text-primary pl-3" href="">
                                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;