import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)

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

    return (
        <div className="page">
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer/>

            <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <label className="popup__field">
                    <input type="text" id="input-name" name="name" placeholder="Имя"
                           className="popup__input popup__input_type_name" required minLength="2" maxLength="40"/>
                    <span className="popup__input-error input-name-error"></span>
                </label>
                <label className="popup__field">
                    <input type="text" id="input-occupation" name="about" placeholder="Род деятельности"
                           className="popup__input popup__input_type_occupation" required minLength="2"
                           maxLength="200"/>
                    <span className="popup__input-error input-occupation-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?" button="Да">
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <label className="popup__field">
                    <input type="url" id="input-avatar" name="avatar" placeholder="Ссылка на картинку"
                           className="popup__input popup__input_type_link" required/>
                    <span className="popup__input-error input-avatar-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="card" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <label className="popup__field">
                    <input type="text" id="input-title" name="title" placeholder="Название"
                           className="popup__input popup__input_type_title" required minLength="2" maxLength="30"/>
                    <span className="popup__input-error input-title-error"></span>
                </label>
                <label className="popup__field">
                    <input type="url" id="input-link" name="link" placeholder="Ссылка на картинку"
                           className="popup__input popup__input_type_link" required/>
                    <span className="popup__input-error input-link-error"></span>
                </label>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
    );
}

export default App;
