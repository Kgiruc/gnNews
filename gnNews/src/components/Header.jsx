import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeView } from "../app/features/viewSlice"
import list from "../assets/icons/list.png"
import tile from "../assets/icons/tile.png"
import PopupHeader from "./Popup/PopupHeader"

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
        <PopupHeader />
      </nav>
    </header>
  )
}

export default Header