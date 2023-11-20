import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import EventDetailsAthenticated from './EventDetailAuthenticated'
import EventDetailsNotAthenticated from './EventDetailNotAuthenticated'

export default function EventDetail() {
  return (
    <>
      <IfAuthenticated>
        <EventDetailsAthenticated />
      </IfAuthenticated>

      <IfNotAuthenticated>
        <EventDetailsNotAthenticated />
      </IfNotAuthenticated>
    </>
  )
}
