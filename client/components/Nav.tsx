import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav-buttons">
      <div className="nav">
        <Link to="/">Home</Link>
      </div>
      <div className="nav">
        <Link to="/my-Events">My Events</Link>
      </div>
      <div className="nav">
        <Link to="/my-profile">My Profile</Link>
      </div>
    </nav>
  )
}

export default Nav
