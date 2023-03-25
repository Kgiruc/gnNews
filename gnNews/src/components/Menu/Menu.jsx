import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import MenuList from "./MenuList"

function Menu() {
  const [countrydata, setCountryData] = useState()
  const [loading, setLoading] = useState(true)

  const view = useSelector((state) => state.view.viewState)

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
      {view ? <p>kafle</p> : <p>lista</p>}
      {countrydata  && <MenuList countrydata={countrydata}/> }
      {loading && <p>loading...</p>}
    </aside>
  )
}

export default Menu