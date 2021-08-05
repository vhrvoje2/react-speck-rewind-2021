import React from 'react';
import './PageTitle.scss';

const PageTitle = (props) => {
    return (
        <div class="page-header">
            <h2>{ props.title }</h2>
        </div>
    );
}

export default PageTitle;