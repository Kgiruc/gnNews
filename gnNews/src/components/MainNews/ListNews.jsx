function ListNews({ newsall }) {
    return (
        <article>
            {
                newsall.articles.map((news) =>
                <section key={news.url}>
                    <h3>{news.title}</h3>
                    <p>{news.source.name}</p>
                    <p>{news.publishedAt}</p>
                </section> 
                )
            }
        </article>
    )
}

export default ListNews