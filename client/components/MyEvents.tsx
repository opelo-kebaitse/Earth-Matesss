import EventList from './EventList'
import { useEvents } from '../hooks/useEvents'
import { useAuth0 } from '@auth0/auth0-react'
import { useJoin } from '../hooks/useJoins'

export default function MyEvents() {
  const { getAccessTokenSilently, user } = useAuth0()
  const events = useEvents()
  const joins = useJoin()
  return (
    <>
      <h1 className="title-container">This is the My Events Page</h1>

      <EventList events={joins} />
    </>
  )
}
