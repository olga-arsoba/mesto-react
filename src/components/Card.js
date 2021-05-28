import React from 'react'

function Card(props) {
    const {onCardClick, card} = props
    const handleClick = () => {
        onCardClick(card);
    }

    return(
        <div className="element">
            <img className="element__item" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__name">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className="element__like"></button>
                    <span className="element__like-amount">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" className="element__trash"></button>
        </div>
    )
}

export default Card