import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeView } from "../app/features/viewSlice"
import popup from "../assets/icons/pop-up.png"
import list from "../assets/icons/list.png"
import tile from "../assets/icons/tile.png"

function Header() {
  const dispatch = useDispatch()
  const view = useSelector((state) => state.view.viewState)

  return (
    <header>
      <h1><Link to="/">gnNews</Link></h1>
      <nav>
        <button onClick={() => dispatch(changeView())} data-testid="change-view-button">
          {view ? <img src={tile} alt="tile" /> : <img src={list} alt="list" />}
        </button>
        <button><img src={popup} alt="pop up"/></button>
      </nav>
    </header>
  )
}

export default Header