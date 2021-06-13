import React from 'react'

function PopupWithForm(props) {
    const {isOpen, onClose, name, title, children, button, onSubmit} = props
    return(
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button onClick={onClose} type="button" className="popup__close"></button>
                <h2 className="popup__title">{title}</h2>
                <form name={name} className="popup__form" onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className="popup__button-submit">{button}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm