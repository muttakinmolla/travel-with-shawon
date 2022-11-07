import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/package-1.jpg';
import image2 from '../../assets/images/package-2.jpg';
import image3 from '../../assets/images/package-3.jpg';

const Services = () => {
    return (
        <div className='container'>
            <h1 className='text-center p-5'>My Services</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div class="card">
                        <img src={image1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" class="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;