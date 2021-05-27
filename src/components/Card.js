function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
    }

    return(
        <div className="element">
            <img className="element__item" src={props.card.link} onClick={handleClick}/>
            <div className="element__name">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-wrapper">
                    <button type="button" className="element__like"></button>
                    <span className="element__like-amount">{props.card.likes.length}</span>
                </div>
            </div>
            <button type="button" className="element__trash"></button>
        </div>
    )
}

export default Card