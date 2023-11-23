import { useNavigate } from 'react-router-dom'
import EventList from './EventList'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Home() {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  
  return (
    <>
      <h2 className="page-title">
        Find like-minded people doing cool things for the whenua in your hapori!
      </h2>
      <div className="event-container">
        <IfAuthenticated>
        <button className="crEve-button" onClick={() => navigate('/AddEvent')}>
          Create Event
        </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className ="button" onClick={() => loginWithRedirect(redirectUri: `${window.location.origin}/register`)}>
          Log in to create or join an event!
          </button>

        </IfNotAuthenticated>
      </div>
      <EventList />
    </>
  )
}

export default Home
