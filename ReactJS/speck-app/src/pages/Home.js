import React from 'react';
import Progress from 'rsup-progress';

// Components
import Hero from '../components/Hero/Hero.js';
import More from '../components/More/More.js';
import CardContainer from '../components/CardContainer/CardContainer.js';
import Card from '../components/Card/Card.js';
import LastYear from '../components/LastYear/LastYear.js';
import Main from '../components/Main/Main.js';

// Assets
import About from '../assets/img/about.jpg';
import Calendar from '../assets/img/calendar.jpg';
import Partner from '../assets/img/partner.jpg';
import Speakers from '../assets/img/speakers.jpg';

const Home = () => {
    const progress = new Progress({
        height: 3,
        color: "#c59613",
        duration: 3000,
    });

    progress.start();
    setTimeout(() => {
        progress.end();
    }, 3000);

    return (
        <>
            <Main>
                <Hero />
                <More />
                <CardContainer>
                    <Card image={ About } alt="About" title="O tjednu karijera" />
                    <Card image={ Speakers } alt="Speakers" title="Izlagači" />
                    <Card image={ Calendar } alt="Calendar" title="Raspored događanja" />
                    <Card image={ Partner } alt="Partner" title="Partneri" />
                </CardContainer>
                <LastYear />
            </Main>
        </>
    );
}

export default Home;