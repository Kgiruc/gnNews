import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import ListNews from "./ListNews"
import TilesNews from "./TilesNews"
import { changeResults } from "../../app/features/resultsSlice"

function MainNews({ setResult }) {
  const params = useParams()
  const location = useLocation()
  const view = useSelector((state) => state.view.viewState)
  const dispatch = useDispatch()

  const [newsall, setNewsAll] = useState([{}])
  const [loadingnews, setLoadingNews] = useState(true)

  const apiKey = "81d2d45d2a0b48adb2f02a497196a17a"

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${location.state}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setNewsAll(data)
        setLoadingNews(false)
        dispatch(changeResults(data.totalResults))
      })
      .catch(err => alert(err))
  }, [location])

  return (
    <>
      {
        newsall.articles &&
        <article>
          <h2>{params.countryId}</h2>
          {view ? <ListNews newsall={newsall} /> : <TilesNews newsall={newsall} />}
          {newsall.totalResults === 0 && <p className="no_results">no results...</p>}  
        </article>  
      }
      {loadingnews && <p>loadingnews...</p>}
    </>
  )
}

export default MainNews