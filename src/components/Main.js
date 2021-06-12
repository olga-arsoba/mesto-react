import React from 'react'
import rectangle from '../images/vector_rectangle.svg'
import Card from './Card'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const {onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete} = props

    const handleCardLike = (card) => {
        onCardLike(card)
    }

    const handleCardDelete = (card) => {
        onCardDelete(card)
    }

    return(
        <main className="content">
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-edit">
                    <img src={currentUser.avatar} alt="" className="profile__avatar" />
                </div>
                <div onClick={onEditProfile} className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" id="edit-profile" className="profile__button-edit"></button>
                    <h2 className="profile__occupation">{currentUser.about}</h2>
                </div>

                <button onClick={onAddPlace} type="button" id="add-card" className="profile__button-add">
                    <img src={rectangle} alt="Кнопка добавления" className="profile__button-vector" />
                </button>

            </section>

            <section className="cards">
                {cards.map((card, i) => (
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                ))}

            </section>

        </main>
    )
}

export default Main