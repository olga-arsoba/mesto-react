import React from 'react'
import rectangle from '../images/vector_rectangle.svg'
import api from '../utils/api'
import Card from './Card'

function Main(props) {
    const {onEditAvatar, onEditProfile, onAddPlace, onCardClick} = props
    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ]).then(([ userInfo, cards ]) => {
            setUserName(userInfo.name)
            setUserDescription(userInfo.about)
            setUserAvatar(userInfo.avatar)
            setCards(cards)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return(
        <main className="content">
            <section className="profile">
                <div onClick={onEditAvatar} className="profile__avatar-edit">
                    <img src={userAvatar} alt="" className="profile__avatar" />
                </div>
                <div onClick={onEditProfile} className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" id="edit-profile" className="profile__button-edit"></button>
                    <h2 className="profile__occupation">{userDescription}</h2>
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
                    />
                ))}

            </section>

        </main>
    )
}

export default Main