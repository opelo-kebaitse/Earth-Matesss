import { Outlet } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Header from './Header'
import Login from './Login'

function App() {
  return (
    <>
      <Header />
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Outlet />
      </IfAuthenticated>
    </>
  )
}

export default App
