import { useQuery } from '@tanstack/react-query'
import { Event } from '../../models/event'
import { getEventList } from '../apis/events'

export default function EventDetails() {
  const { data: events, isLoading, error } = useQuery(['events'], getEventList)

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!events || isLoading) {
    return <p> Loading... </p>
  }

  return (
    <div>
      {
        <div className="eventBox">
          <h3>{event.name}</h3>
          <p>Photo to come</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
          <p>Description: {event.description}</p>
          <p>Organiser: {event.added_by_user}</p>
          <button></button>
        </div>
      }
    </div>
  )
}

//join to come in function for this card to display the users name from the users table
//and a join button to populate the third table to do the many to many joins
//add photo
