import { useState } from "react"
import PopupNews from "../Popup/PopupNews"

function ListNews({ newsall }) {
    const [open, setOpen] = useState()
    return (
        <article>
            {
                newsall.articles.map((news) =>
                <section key={news.url}>
                    <h3>{news.title}</h3>
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

export default ListNews