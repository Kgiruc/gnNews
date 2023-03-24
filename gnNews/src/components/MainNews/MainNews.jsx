import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ListNews from "./ListNews"

function MainNews({ setResult }) {
  const params = useParams()
  const location = useLocation()

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
  },[location])

  return (
    <article>
      <h2>{params.countryId}</h2>
      {newsall.articles && <ListNews newsall={newsall} />}
      {newsall.totalResults === 0 && <p>no results...</p>}
      {loadingnews && <p>loadingnews...</p>}
    </article>
  )
}

export default MainNews