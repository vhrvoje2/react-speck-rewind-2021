import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-div">
                    <h1 className="hero-heading">Tjedan karijera</h1>
                    <span className="hero-organizer">FOI</span>
                    <p className="hero-date">20.10.2020 - 26.10.2020</p>
                    <p href="#" className="hero-btn">PRIJAVI SE</p>
                </div>
            </section>
        </div>
    );
}

export default Hero;