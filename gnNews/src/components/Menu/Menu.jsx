import { useState, useEffect } from "react"
import MenuList from "./MenuList"
import MobileMenu from "./MobileMenu"

function Menu() {
  const [countrydata, setCountryData] = useState()
  const [loading, setLoading] = useState(true)

  

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountryData(data)
        setLoading(false)
      })
      .catch(err => alert(err))
  }, [])
  
  return (
    <>
    <aside>
      {countrydata  && <MenuList countrydata={countrydata} data-testid="menu-list"/>}
      {loading && <p>loading...</p>}
    </aside>
      {countrydata && <MobileMenu countrydata={countrydata} data-testid="menu-mobile-list"/>}
    </>
  )
}

export default Menu