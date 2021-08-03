import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div>
            <section class="hero">
                <div class="hero-div">
                    <h1 class="hero-heading">Tjedan karijera</h1>
                    <span class="hero-organizer">FOI</span>
                    <p class="hero-date">20.10.2020 - 26.10.2020</p>
                    <a href="#" class="hero-btn">PRIJAVI SE</a>
                </div>
            </section>
        </div>
    );
}

export default Hero;