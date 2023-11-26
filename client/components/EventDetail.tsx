import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import EventDetailsAuthenticated from './EventDetailAuthenticated'
import EventDetailsNotAuthenticated from './EventDetailNotAuthenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function EventDetail() {

  return (
    <>
      <IfAuthenticated>
        <EventDetailsAuthenticated  />
      </IfAuthenticated>

      <IfNotAuthenticated>
        <EventDetailsNotAuthenticated />
      </IfNotAuthenticated>
    </>
  )
}
