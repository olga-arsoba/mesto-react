import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import api from '../utils/api'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        about: '',
        avatar: ''
    })
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo().then((userInfo) => {
            setCurrentUser(userInfo)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true)
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true)
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true)
    }

    const handleCardClick = (card) => {
        setSelectedCard(card)
    }

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard(null)
    }

    const handleUpdateUser = (userInfo) => {
        api.editUserInfo(userInfo).then((user) => {
            setCurrentUser(user)
            closeAllPopups()
        }).catch((err) => {
            console.error(err)
        })
    }

    const handleUpdateAvatar = (avatar) => {
        api.editAvatar(avatar).then((user) => {
            setCurrentUser(user)
            closeAllPopups()
        }).catch((err) => {
            console.error(err)
        })
    }

    const handleAddCard = (card) => {
        api.addCard(card).then((newCard) => {
            setCards([newCard, ...cards])
            closeAllPopups()
        }).catch((err) => {
            console.error(err)
        })
    }

    React.useEffect(() => {
        api.getInitialCards().then((cards) => {
            setCards(cards)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id)
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        }).catch((err) => {
            console.error(err)
        })
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id).then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id))
        }).catch((err) => {
            console.error(err)
        })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Footer/>

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

            <PopupWithForm name="delete" title="Вы уверены?" button="Да">
            </PopupWithForm>

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard}/>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
