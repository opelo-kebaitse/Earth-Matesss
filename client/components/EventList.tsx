import { useQuery } from '@tanstack/react-query'
import { ListEvent } from '../../models/event'
import { getEventList } from '../apis/events'
import { Link } from 'react-router-dom'

export default function EventList() {
  const { data: events, isLoading, error } = useQuery(['events'], getEventList)

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!events || isLoading) {
    return <p> Loading... </p>
  }

  return (
    <div>
      {events.map((event: ListEvent, index: number) => (
        <div key={index}>
          <Link to={`/${event.id}`}>
            <h3>{event.name}</h3>
          </Link>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  )
}
