import React from 'react';
import './LastYear.scss';

import LastYearImage from '../../assets/img/last-year.jpg';

const LastYear = () => {
    return (
        <div className="last-year">
            <div className="last-year-inner">
                <h2>FOI tjedan karijera 2019</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore id quasi asperiores consequuntur quis error commodi consectetur sint, dolores pariatur iure accusamus in earum laudantium dolorum, officia hic unde sequi doloremque aliquam doloribus numquam a dolor. Iste cum assumenda laboriosam aut nihil nulla quo molestiae, ab ducimus explicabo pariatur commodi quae, quas sunt obcaecati asperiores sequi quod sed.</p>
                <div className="last-year-img">
                    <img src={ LastYearImage } alt="last year" />
                </div>
            </div>
        </div>
    );
}

export default LastYear;