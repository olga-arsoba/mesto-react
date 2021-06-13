import React from 'react'
import PopupWithForm from './PopupWithForm'
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
    const {isOpen, onClose, onUpdateUser} = props
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const currentUser = React.useContext(CurrentUserContext)
    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser, isOpen])
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdateUser({
            name,
            about: description,
        })
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" button="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__field">
                <input type="text" id="input-name" name="name" placeholder="Имя"
                       className="popup__input popup__input_type_name" required minLength="2" maxLength="40"
                        value={name} onChange={handleNameChange}/>
                <span className="popup__input-error input-name-error"></span>
            </label>
            <label className="popup__field">
                <input type="text" id="input-occupation" name="about" placeholder="Род деятельности"
                       className="popup__input popup__input_type_occupation" required minLength="2"
                       maxLength="200" value={description} onChange={handleDescriptionChange}/>
                <span className="popup__input-error input-occupation-error"></span>
            </label>
        </PopupWithForm>
    )
}


export default EditProfilePopup