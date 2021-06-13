import React from 'react'
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const {isOpen, onClose, onAddCard} = props
    const [title, setTitle] = React.useState('')
    const [link, setLink] = React.useState('')
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleLinkChange = (e) => {
        setLink(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddCard({
            link,
            name: title,
        }).then(() => {
            setTitle('')
            setLink('')
        })
    }
    return(
        <PopupWithForm name="card" title="Новое место" button="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__field">
                <input type="text" id="input-title" name="title" placeholder="Название"
                       className="popup__input popup__input_type_title" required minLength="2" maxLength="30"
                       value={title} onChange={handleTitleChange}/>
                <span className="popup__input-error input-title-error"></span>
            </label>
            <label className="popup__field">
                <input type="url" id="input-link" name="link" placeholder="Ссылка на картинку"
                       className="popup__input popup__input_type_link" required
                       value={link} onChange={handleLinkChange}/>
                <span className="popup__input-error input-link-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup