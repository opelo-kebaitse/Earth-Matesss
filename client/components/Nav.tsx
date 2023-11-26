// Remove unused code
// Consider a more user friendly way to desginate log in vs. register. Once the user is 
// Once the user is registered, they shouldn't need to see the register button anymore.

function Nav() {
  return (
    <nav className="nav-buttons">
      <div className="nav">
        <a href="/">Home</a>
      </div>
      <div className="nav">
        <a href="/my-events">My Events</a>
      </div>
      <div className="nav">
        <a href="/my-profile">My Profile</a>
      </div>
    </nav>
  )
}

export default Nav
