function ImagePopup(props) {
    if (props.card !== null) {
        return(
            <div className={`popup popup_type_image ${props.card !== null ? "popup_opened" : ""}`}>
                <div className="popup__image">
                    <button onClick={props.onClose} type="button" className="popup__close"></button>
                    <img src={props.card.link} alt="popup" className="popup__image-full"/>
                    <h2 className="popup__image-title">{props.card.name}</h2>
                </div>
            </div>
        )
    } else {
        return (null)
    }
}

export default ImagePopup