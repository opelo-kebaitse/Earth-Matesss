
import { Link } from 'react-router-dom'

export default function EventList(events) {
  console.log(events.events.data)
  if (events.error) {
    return <p>Something went wrong!</p>
  }

  if (!events.events.data || events.isLoading) {
    return <p> Loading... </p>
  }

  return (
    
    <div className="events-container">
      {(events.events.data.length === 0) ? <p>No upcoming events</p> : events.events.data.map((event, index: number) => (
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
