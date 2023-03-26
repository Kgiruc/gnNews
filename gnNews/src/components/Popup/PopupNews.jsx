function PopupNews({ newscontent, newsauthor, newsurl, setOpen }) {
    return (
        <div className="popup__background">
            <div className="popup__container">
                <button onClick={() => setOpen()}>x</button>
                <p>{newscontent}</p>
                <p>{newsauthor}</p>
                <a href={newsurl}>url</a>
            </div>
        </div>
    )
}

export default PopupNews