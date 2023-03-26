import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import ListNews from "./ListNews"
import TilesNews from "./TilesNews"

function MainNews({ setResult }) {
  const params = useParams()
  const location = useLocation()
  const view = useSelector((state) => state.view.viewState)

  const [newsall, setNewsAll] = useState([{}])
  const [loadingnews, setLoadingNews] = useState(true)

  const apiKey = "81d2d45d2a0b48adb2f02a497196a17a"

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${location.state}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setNewsAll(data)
        console.log(data)
        setLoadingNews(false)
        setResult(data.totalResults)
      })
  }, [location])

  return (
    <>
      {
        newsall.articles &&
        <article>
          <h2>{params.countryId}</h2>
          {view ? <ListNews newsall={newsall} /> : <TilesNews newsall={newsall} />}
          {newsall.totalResults === 0 && <p>no results...</p>}
          {loadingnews && <p>loadingnews...</p>}
        </article>
      }
    </>
  )
}

export default MainNews