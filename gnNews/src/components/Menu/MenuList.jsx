import { Link } from "react-router-dom"

function MenuList({ countrydata }) {
    return (
        <div className="country__container">
            {
                countrydata.map((country) =>
                <div key={country.cca2} >
                    <Link
                        className="country__link"
                        state={country.cca2}
                        to={`/country/${country.name.common}`}
                    >
                        <img src={country.flags.png} alt="flag" />
                        <p>{country.name.common}</p>
                    </Link>
                </div>
                )
                
            }
        </div>
    )
}

export default MenuList