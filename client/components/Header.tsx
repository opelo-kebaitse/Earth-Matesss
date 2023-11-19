import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header() {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <header>
      <nav
        className="nav-container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="title-container">
          <Link to="/" className="title-link">
            <h1 className="header-title">Earth Mates</h1>
          </Link>
        </div>
        <div className="button-container">
          <IfAuthenticated>
            <p className="">{user?.nickname}</p>
            <button className="button" onClick={() => logout()}>
              Logout
            </button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className="button" onClick={() => loginWithRedirect()}>
              Login
            </button>
          </IfNotAuthenticated>
        </div>
      </nav>
    </header>
  )
}

export default Header