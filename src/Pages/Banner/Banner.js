import React from 'react';
import bannerImage1 from '../../assets/images/carousel-1.jpg';
import bannerImage2 from '../../assets/images/carousel-2.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerImage1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-caption">
                        <h1>Explore Yourself by Traveling</h1>
                        <p>Your Expert Guide is here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bannerImage2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block carousel-caption">
                        <h1>let's go to sea</h1>
                        <p>I'm your personal Tour Guide here for guiding you.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;