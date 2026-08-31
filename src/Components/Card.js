import React from 'react';
import './Card.css';

export default function Card(props) {

    let { name,origin, image, rating } = props;

    return (
        <div className="post-card">
            <img src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelltyI6dqNBp9QF5GnTXMK_X5Kod66kpnK9YD192KFQ&s=10"}className="post-image"alt={name}/>
            <div className="post-body">
                <h2 className="post-title">{name}</h2>
                <p className="post-description">{origin}</p>
                <p className="post-description">{rating}</p>
                <a href="/" className="read-more">View</a>
            </div>
        </div>
    );
}