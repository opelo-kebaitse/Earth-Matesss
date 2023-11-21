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
          <p>Date: {new Date(data.date).toString()}</p>
          <p>Description: {data.description}</p>
          <p>Organiser: {data.userName}</p>
        </div>
      </div>
    </div>
  )
}


//filter events list to display info 
