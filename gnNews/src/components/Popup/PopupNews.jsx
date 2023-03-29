import close_img from "../../assets/icons/close.png"

function PopupNews({ newscontent, newsauthor, newsurl, setOpen }) {
    return (
        <div className="popup__background">
            <div className="popup__container">
                <button onClick={() => setOpen()}>
                    <img src={close_img} alt="close"/>
                </button>
                <p>{newscontent}</p>
                <p>{newsauthor}</p>
                <a href={newsurl}>url</a>
            </div>
        </div>
    )
}

export default PopupNews