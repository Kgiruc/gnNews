import { useState, useEffect } from "react"
import MenuList from "./MenuList"

function Menu() {
  const [countrydata, setCountryData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCountryData(data)
        setLoading(false)
      })
      .catch(err => alert(err))
  }, [])
  
  return (
    <aside>
      {countrydata  && <MenuList countrydata={countrydata}/> }
      {loading && <p>loading...</p>}
    </aside>
  )
}

export default Menu