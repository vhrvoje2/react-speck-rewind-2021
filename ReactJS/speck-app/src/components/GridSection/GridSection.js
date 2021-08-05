import React from 'react';
import './GridSection.scss';

const GridSection = (props) => {
    return (
        <div className="section-events">
            {props.children}
        </div>
    );
}

export default GridSection;