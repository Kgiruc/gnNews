import { useState } from "react"
import PopupNews from "../Popup/PopupNews"
import read_more from "../../assets/icons/read-more.png"
import moment from "moment"

function ListNews({ newsall }) {
    const [open, setOpen] = useState()
    return (
        <article>
            {
                newsall.articles.map((news) =>
                    <section key={news.url}>
                        <h3>{news.title}</h3>
                        <p className="news__source">{news.source.name}</p>
                        <p>{moment(news.publishedAt).format("D MMMM YYYY, HH:mm")}</p>
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

export default ListNews