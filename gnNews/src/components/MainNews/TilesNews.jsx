import { useState } from "react"
import PopupNews from "../Popup/PopupNews"
import no_photo from "../../assets/icons/no-photo.png"
import read_more from "../../assets/icons/read-more.png"

function TilesNews({ newsall }) {
    const [open, setOpen] = useState()

    return (
        <article>
            {
                newsall.articles.map((news) =>
                    <section key={news.url} className="tile__container__solo">
                        {news.urlToImage != null ?
                            <img src={news.urlToImage} alt="news image" /> 
                            :
                            <img className="no_photo" src={no_photo} alt="none image" />
                        }
                        <h3>{news.title}</h3>
                        <h4>{news.desciption}</h4>
                        <p>{news.source.name}</p>
                        <p>{news.publishedAt}</p>
                        <button onClick={() => setOpen(news.url)}>
                            <img src={read_more} alt="read more"/>
                        </button>
                            {open === news.url && <PopupNews
                                newscontent={news.content}
                                newsauthor={news.author}
                                newsurl={news.url}
                                setOpen={setOpen}
                            />}
                    </section>
                )
            }

        </article>
    )
}

export default TilesNews