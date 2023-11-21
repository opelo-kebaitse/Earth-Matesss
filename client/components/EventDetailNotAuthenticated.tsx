import { useParams } from 'react-router-dom'

import { useEvent } from '../hooks/useEvents.ts'

export default function EventDetailsNotAuthenticated() {
  const { id } = useParams()
  const numId = Number(id)
  const { data, isLoading, error } = useEvent(numId)

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className="evDet">
        <div className="eventBox">
          <h3>{data.eventName}</h3>
          <p>Location: {data.location}</p>
          <p>Date: {data.date}</p>
          <p>Description: {data.description}</p>
          <p>Organiser: {data.userName}</p>
        </div>
      </div>
    </div>
  )
}

// //join to come in function for this card to display the users name from the users table
// //and a join button to populate the third table to do the many to many joins
// //add photo
// refactor!!!
