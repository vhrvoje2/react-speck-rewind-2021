import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <div class="card">
            <div class="card-img">
                <img src={ props.image } alt={ props.alt } />
            </div>
            <h3>{ props.title }</h3>
        </div>
    );
}

export default Card;