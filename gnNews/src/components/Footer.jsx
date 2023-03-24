import { useEffect, useState } from "react"



function Footer({ result }) {
  const [time, setTime] = useState()
  
  

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString("pl-PL"))
    }, 1000)
  },[])

  return (
    <footer>
      <p>results: {result}</p>
      <p>{time}</p>
    </footer>
  )
}

export default Footer