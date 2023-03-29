import close_img from "../../assets/icons/close.png"

function PopupNews({ newscontent, newsauthor, newsurl, setOpen }) {
    return (
        <div className="popup__background">
            <div className="popup__container">
                <button onClick={() => setOpen()}>
                    <img src={close_img} alt="close" />
                </button>
                {newscontent ?
                    <p className="popup__content">{newscontent}</p>
                    :
                    <p className="popup__content">none</p>
                }
                <p className="popup__author">author:{newsauthor}</p>
                <a href={newsurl} target="_blank">:link do artykułu</a>
            </div>
        </div >
    )
}

export default PopupNews