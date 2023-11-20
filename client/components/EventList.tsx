import { useEvents } from '../hooks/useEvents.ts'
import { ListEvent } from '../../models/Event.ts'
import { Link } from 'react-router-dom'

export default function EventList() {
  const { data: events, isLoading, error } = useEvents()

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!events || isLoading) {
    return <p> Loading... </p>
  }

  return (
    <div className="events-container">
      {events.map((event: ListEvent, index: number) => (
        <div className="event-card" key={index}>
          {/* Display the event image */}
          <div
            className="event-image"
            style={{ backgroundImage: `url(${event.photo})` }}
          ></div>
          <div className="event-details">
            <Link to={`/${event.id}`}>
              <h3>{event.name}</h3>
            </Link>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
