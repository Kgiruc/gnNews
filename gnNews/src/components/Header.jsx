import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeView } from "../app/features/viewSlice"

function Header() {
  const dispath = useDispatch()

  return (
    <header>
      <h1><Link to="/">gnNews</Link></h1>
      <nav>
        <button onClick={() => dispath(changeView())}>change view</button>
        <button>popup</button>
      </nav>
    </header>
  )
}

export default Header