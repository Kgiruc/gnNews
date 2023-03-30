import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Footer() {
  const [currentTime, setCurrentTime] = useState()
  const result = useSelector(state => state.results.resultsState)
  
  

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setCurrentTime(date.toLocaleTimeString("pl-PL"))
    }, 1000)
  },[])

  return (
    <footer>
      {result > 0 &&<p>results: {result}</p>}
      <time>{currentTime}</time>
    </footer>
  )
}

export default Footer