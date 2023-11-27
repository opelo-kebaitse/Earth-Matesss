import EventList from './EventList'
import { useEvents } from '../hooks/useEvents'
import { useAuth0 } from '@auth0/auth0-react'
import { useJoin } from '../hooks/useJoins'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'

export default function MyEvents() {
  const { loginWithRedirect } = useAuth0()
  // const { getAccessTokenSilently, user } = useAuth0()
  // const events = useEvents()
  const joins = useJoin()
  return (
    <>
      <h1 className="title-container">Welcome to your events</h1>
        <div className="event-container">
      <IfNotAuthenticated>
        <button
          className="crEve-button"
          onClick={() =>
            loginWithRedirect({
              redirectUri: `${window.location.origin}/register`,
            })
          }
        >
          Log in to create or join an event!
        </button>
      </IfNotAuthenticated>
      </div>
      <IfAuthenticated>
        <EventList events={joins} />
      </IfAuthenticated>
    </>
  )
}
