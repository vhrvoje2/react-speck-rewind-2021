import React, { useEffect, useState } from 'react';

// Components
import GridSection from '../components/GridSection/GridSection';
import Main from '../components/Main/Main';
import PageTitle from '../components/PageTitle/PageTitle';
import InfoBox from '../components/InfoBox/InfoBox.js';
import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper.js';
import SearchBar from '../components/SearchBar/SearchBar';

// Data
import SpeakersData from '../lib/speakers.js';

const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);
    const [filteredSpeakers, setFilteredSpeakers] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSpeakers(SpeakersData);
            setFilteredSpeakers(SpeakersData);
        }, 1000);
    }, []);

    const ShowSpeakers = () => {
        return speakers.map((speaker, idx) => 
            <InfoBox key={ idx }
                     title={ speaker.title }
                     description={ speaker.description }
                     link={ speaker.link }
            />
        );
    };

    const inputChange = (value) => {
        const filteredResult = filteredSpeakers.filter(speaker => speaker.title.toLowerCase().includes(value.toLowerCase()));
        setSpeakers(filteredResult);
    }

    return (
        <Main>
            <PageTitle title="Speakers" />
            <SearchBar state={ speakers.length ? false : true }
                       onValueChange={ inputChange }
                       placeholder="Search speakers..."/>
            {
                !speakers.length ? 
                    <LoaderWrapper /> 
                :
                    <GridSection>
                        { ShowSpeakers() }                        
                    </GridSection>
            }
        </Main>
    );
}

export default Speakers;