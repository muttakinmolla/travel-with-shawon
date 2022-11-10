import React from 'react';
import bannerImage1 from '../../assets/images/carousel-1.jpg';
import bannerImage2 from '../../assets/images/carousel-2.jpg';
import bannerImage3 from '../../assets/images/sajekBanner.jpg';
import './Banner.css';

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
                    <div className=' carousel-img'>

                        <img src={bannerImage1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-caption d-md-block carousel-caption">
                        <h1>Explore Yourself by Traveling</h1>
                        <p>Your Expert Guide is here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=' carousel-img'>

                    <img src={bannerImage2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-caption d-md-block carousel-caption">
                        <h1>let's go to sea</h1>
                        <p>I'm your personal Tour Guide here for guiding you.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=' carousel-img'>

                    <img src={bannerImage3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-caption d-md-block carousel-caption">
                        <h1>It's darjiling Of Bangladesh</h1>
                        <p>Let's explore the beauty of Sajek Rangamati</p>
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