import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1><Link to="/">gnNews</Link></h1>
      <nav>
        <button>change view</button>
        <button>popup</button>
      </nav>
    </header>
  )
}

export default Header