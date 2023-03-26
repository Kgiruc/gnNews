import { useState } from "react"
import img_logo from "../../assets/react.svg"
import PopupNews from "../Popup/PopupNews"

function TilesNews({ newsall }) {
    const [open, setOpen] = useState()

    return (
        <article>
            {
                newsall.articles.map((news) =>
                    <section key={news.url}>
                        {news.urlToImage != null ?
                            <img src={news.urlToImage} alt="news image" /> :
                            <img src={img_logo} alt="none image" />}
                        <h3>{news.title}</h3>
                        <h4>{news.desciption}</h4>
                        <p>{news.source.name}</p>
                        <p>{news.publishedAt}</p>
                        <button onClick={() => setOpen(news.url)}>show more...</button>
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