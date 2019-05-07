import React from 'react';
import {Link} from 'react-router-dom';

export default function Movies(props) {
    return (
        <Link to={`/${props.movieId}`} className='item'>
            <img src={props.logo} alt={props.title} />
            <div className="overlayText">
                <h2>{props.title}!</h2>
            </div>
        </Link>
    );
}