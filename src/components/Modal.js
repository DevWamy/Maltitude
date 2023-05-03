import React from 'react';

const Modal = ({ beer, onClose }) => {
    const handleClose = () => {
        document.body.classList.remove('modal-open'); // Retirer la classe "modal-open" lorsque la modale est fermée
        onClose();
    };

    const handleOpen = () => {
        document.body.classList.add('modal-open'); // Ajouter la classe "modal-open" lorsque la modale est ouverte
    };

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <article className="modal" onClick={(event) => event.stopPropagation()} onMouseEnter={handleOpen}>
                <span className="close" onClick={handleClose}>
                    &times;
                </span>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <br />
                <h2>Description:</h2>
                <p>{beer.description}</p>
                <br />
                <p>Target final gravity: {beer.target_fg}</p>
                <p>Target original gravity: {beer.target_og}</p>
                <p>Attenuation level: {beer.attenuation_level}</p>
                <p>ph. {beer.ph}</p>
                <br />
                <p>
                    When you boil {beer.boil_volume.value} liters, you get back {beer.volume.value} liters.
                </p>
                <p>
                    Color : {beer.ebc} EBC/ {beer.srm} SRM.
                </p>
                <p>ABV: {beer.abv}%</p>
                <p>Bitterness: {beer.ibu}</p>
                <br />
                <h3>And what do we eat with it?</h3>
                <p>
                    {beer.food_pairing.map((food, index) => (
                        <React.Fragment key={index}>
                            {food}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <br />
                <h3>Brewer tips</h3>
                <p>{beer.brewers_tips}</p>
                <br />
                <h3>Contributed by</h3>
                <p>{beer.contributed_by}</p>
            </article>
        </div>
    );
};

export default Modal;
