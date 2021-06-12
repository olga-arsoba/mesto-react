import React from 'react'
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const {isOpen, onClose, onUpdateAvatar} = props
    const avatarInputRef = React.useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdateAvatar({
            avatar: avatarInputRef.current.value,
        });
    }
    return (
        <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="popup__field">
                <input ref={avatarInputRef} type="url" id="input-avatar" name="avatar" placeholder="Ссылка на картинку"
                       className="popup__input popup__input_type_link" required/>
                <span className="popup__input-error input-avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup