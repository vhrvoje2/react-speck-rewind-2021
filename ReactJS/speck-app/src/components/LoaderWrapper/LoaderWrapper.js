import React from 'react';
import './LoaderWrapper.scss'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderWrapper = () => {
    return (
        <div className="loader-container">
            <Loader type="Grid"
                    color="#c59613"
                    height={100}
                    width={100}
            />
        </div>
    );
}

export default LoaderWrapper;