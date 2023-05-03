import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Modal from './Modal';

const Beers = () => {
    const [data, setData] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers/').then((res) => setData(res.data));
    }, []);

    const handleClick = (beer) => {
        axios.get(`https://api.punkapi.com/v2/beers/${beer.id}`).then((res) => {
            setSelectedBeer(res.data[0]);
        });
    };

    const handleFavorite = (beer) => {
        // Update the favorite property of the clicked beer
        const updatedData = data.map((b) => {
            if (b.id === beer.id) {
                return { ...b, favorite: !b.favorite };
            }
            return b;
        });
        setData(updatedData);
    };

    const filteredData = data.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const getRandomBeer = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const beer = data[randomIndex];
        if (randomBeer && randomBeer.id === beer.id) {
            getRandomBeer();
        } else {
            setRandomBeer(beer);
        }
    };

    return (
        <div className="beers">
            <h1>Our beer cellar </h1>
            <div className="buttons">
                <button onClick={getRandomBeer}>Get random beer</button>
            </div>
            {randomBeer && (
                <div className="random-beer">
                    <h2>Beer</h2>
                    <Card beer={randomBeer} handleClick={handleClick.bind(null, randomBeer)} />
                </div>
            )}
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredData.map((beer, index) => (
                    <Card
                        key={index}
                        beer={beer}
                        handleClick={handleClick.bind(null, beer)}
                        handleFavorite={handleFavorite.bind(null, beer)}
                    />
                ))}
            </ul>
            {selectedBeer && <Modal beer={selectedBeer} onClose={() => setSelectedBeer(null)} />}
        </div>
    );
};

export default Beers;
