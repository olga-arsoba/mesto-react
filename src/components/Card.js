import React from 'react'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const {onCardClick, onCardLike, onCardDelete, card} = props
    const handleClick = () => {
        onCardClick(card)
    }
    const handleLikeClick = () => {
        onCardLike(card)
    }
    const handleDeleteClick =() => {
        onCardDelete(card)
    }
    const isOwn = card.owner._id === currentUser._id
    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
    )

    const isLiked = card.likes.some(i => i._id === currentUser._id)
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : ''}`
    )

    return(
        <div className="element">
            <img className="element__item" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__name">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className="element__like-amount">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
        </div>
    )
}

export default Card