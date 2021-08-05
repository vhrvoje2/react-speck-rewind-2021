import React from 'react';
import './InfoBox.scss';

const InfoBox = (props) => {
    return (
        <div className="info-box">
            <div className="info-box__header">
                {
                    props.location ? 
                        <div className="info-box__icon info-box__icon_type-calendar"></div>
                        :
                        <div class="info-box__icon info-box__icon_type-speakers"></div>
                }
                <h2 className="info-box__title-text">{ props.title }</h2>
            </div>
            { props.location ?
                <div className="info-box__subheader">
                    <div className="info-box__subheader-box">
                        <div className="info-box__icon info-box__icon_type-location"></div>
                        <span className="info-box__subheader-box-text">{ props.location }</span>
                    </div>
                    <div className="info-box__subheader-box">
                        <div className="info-box__icon info-box__icon_type-time"></div>
                        <span className="info-box__subheader-box-text">{ props.datetime }</span>
                    </div>
                </div>
            : null
            }
            <div className="info-box__content">
                <p className="info-box__content-text">
                    { props.description }
                </p>
            </div>
            <div className="info-box__footer">
                <p className="info-box__footer-link">
                    Prijavi se na predavanje
                </p>
            </div>
        </div>
    );
}

export default InfoBox;