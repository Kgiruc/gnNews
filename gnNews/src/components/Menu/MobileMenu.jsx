import { useState } from "react"
import MenuList from "./MenuList"
import right from "../../assets/icons/right.png"
import left from "../../assets/icons/left.png"

function MobileMenu({ countrydata }) {
    const [open, setOpen] = useState(false)

    const openIcon = <img className="mobile-nav__img__open"
        src={right}
        alt="menu mobile"
        onClick={() => setOpen(true)}
    />

    const closeIcon = <img className="mobile-nav__img__close"
        src={left}
        alt="menu mobile close"
        onClick={() => setOpen(false)}
    />
    return (
        <div className='mobile__menu'>
            {open ? closeIcon : openIcon}
            {open && <MenuList  countrydata={countrydata}/>}
        </div>
    )
}

export default MobileMenu