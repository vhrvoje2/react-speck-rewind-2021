import React, { useEffect, useState } from 'react';

// Components
import GridSection from '../components/GridSection/GridSection';
import InfoBox from '../components/InfoBox/InfoBox';
import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper';
import Main from '../components/Main/Main';
import PageTitle from '../components/PageTitle/PageTitle';
import SearchBar from '../components/SearchBar/SearchBar';

// Data
import EventsData from '../lib/events.js';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setEvents(EventsData);
            setFilteredEvents(EventsData);
        }, 1000);
    }, []);

    const ShowEvents = () => {
        return events.map((event, idx) => 
            <InfoBox key={ idx }
                     title={ event.title }
                     location={ event.location }
                     datetime={ event.datetime }
                     description={ event.description }
                     link={ event.link }
            />
        );
    };

    const inputChange = (value) => {
        const filteredResult = filteredEvents.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
        setEvents(filteredResult);
    }

    return (
        <Main>
            <PageTitle title="Events" />
            <SearchBar state={ events.length ? false : true }
                       onValueChange={ inputChange }
                       placeholder="Search events..."/>
            {
                !events.length ? 
                    <LoaderWrapper />
                    :
                    <GridSection>
                        { ShowEvents() }
                    </GridSection>
            }
        </Main>
    );
}

export default Events;