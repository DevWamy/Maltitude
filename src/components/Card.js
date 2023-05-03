import React from 'react';

const Card = ({ beer, handleClick, handleFavorite }) => {
    return (
        <li className="card" onClick={handleClick}>
            <img src={beer.image_url} alt={'image ' + beer.name} />
            <div className="infos">
                <h2>{beer.name}</h2>
                <h3>ABV : {beer.abv} % </h3>
                <h4>
                    Color : {beer.ebc} EBC/ {beer.srm} SRM.
                </h4>
                <h5>{beer.tagline}</h5>
                {/* Add an "favorite" icon to the card based on the "favorite" property */}
                <span
                    className="favorite"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFavorite();
                    }}
                >
                    {beer.favorite ? '★' : '☆'}
                </span>
            </div>
        </li>
    );
};

export default Card;
