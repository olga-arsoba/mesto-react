import React from 'react'

function ImagePopup(props) {
    const {card, onClose} = props
    return(
        <div className={`popup popup_type_image ${card !== null ? "popup_opened" : ""}`}>
            <div className="popup__image">
                <button onClick={onClose} type="button" className="popup__close"></button>
                <img src={card ? card.link : ''} alt={card ? card.name : ''} className="popup__image-full"/>
                <h2 className="popup__image-title">{card ? card.name : ''}</h2>
            </div>
        </div>
    )
}

export default ImagePopup