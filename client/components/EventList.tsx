import { useEvents } from '../hooks/useEvents.ts'
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
      {events.map((event, index: number) => (
        // Unique Keys for List Items: Using the index as a key in the list is not recommended, especially if the list can change. 
        // It's better to use a unique identifier from the event, like event.id.
        <div className="event-card" key={index}>
          {/* Display the event image */}
          <Link to={`/${event.id}`} className="event-details"><div
            className="event-image"
            style={{ backgroundImage: `url(${event.photo})` }}
          ></div>
          <div className="event-details">
            
              <h3>{event.name}</h3>
            
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
          </div></Link>
        </div>
      ))}
    </div>
  )
}
