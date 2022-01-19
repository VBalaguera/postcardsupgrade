import React from 'react';
import {Link} from 'react-router-dom'; 
import '../styles/404.css'; 

const ErrorPage = () => {
    return (
        <div className="errorpage-container">
            <div className="errorpage-container-text">
            <h1>404</h1>
            <p>Something went wrong</p>
            <Link to="/">Go back</Link>
            </div>
        </div>
    )
}

export default ErrorPage; 