import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3 zIndex">
                    <nav className="navbar navbar-expand-lg bg-lg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                        <Link href="" className="navbar-brand">
                            <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <Link href="index.html" className="nav-item nav-link active">Home</Link>
                                <Link href="about.html" className="nav-item nav-link">About</Link>
                                <Link href="service.html" className="nav-item nav-link">Services</Link>
                                <Link href="package.html" className="nav-item nav-link">Tour Packages</Link>
                                <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;