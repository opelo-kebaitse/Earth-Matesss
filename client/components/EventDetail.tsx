import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getEventDetail } from '../apis/events'
import EditEvent from './EditEvent'

export default function EventDetails() {
  const { id } = useParams()
  const numId = Number(id)

  // State to manage whether to show the edit form
  const [isEditing, setIsEditing] = useState(false)

  const {
    data: event,
    isLoading,
    error,
  } = useQuery(['event', id], () => getEventDetail(numId))

  const stopEditing = () => {
    setIsEditing(!isEditing)
  }

  // Function to handle the "Edit" button click and show the form
  const handleEditClick = () => {
    setIsEditing(true)
  }

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!event || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="evDet">
      <div className="eventBox">
        <h3>{event.name}</h3>
        <p>Photo to come</p>
        <p>Location: {event.location}</p>
        <p>Date: {event.date}</p>
        <p>Description: {event.description}</p>
        <p>Organiser: {event.added_by_user}</p>
        <button></button>
      </div>
    </div>
  )
}

// //join to come in function for this card to display the users name from the users table
// //and a join button to populate the third table to do the many to many joins
// //add photo