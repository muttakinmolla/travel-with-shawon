import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';
import { AuthContext } from '../../../context/AtuhProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {/* top bar start */}
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
            {/* top bar end */}
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <div className="container">
                    <Link className="navbar-brand" to="/"><h1 className="text-primary"><span className="text-dark">TRAVEL</span>ER</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            {
                                user?.email ?

                                    <>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user.displayName}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="/">My Review</Link></li>
                                                <li><Link className="dropdown-item" to="/">Add Service</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link className="dropdown-item" onClick={handleLogOut} to="/">Logout</Link></li>
                                            </ul>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                    </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;