import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditEvent from './EditEvent'
import { useEvents, useEvent } from '../hooks/useEvents.ts'

export default function EventDetails() {
  const { id } = useParams()
  const numId = Number(id)
  const navigate = useNavigate()

  // State to manage whether to show the edit form
  const [isEditing, setIsEditing] = useState(false)

  // const {
  //   data: event,
  //   isLoading,
  //   error,
  // } = useQuery(['event', id], () => getEventDetail(numId))

  const { data, isLoading, error } = useEvent(numId)
  const events = useEvents()

  const stopEditing = () => {
    setIsEditing(!isEditing)
  }

  // Function to handle the "Edit" button click and show the form
  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleDelete = () => {
    events.delete.mutate(numId)
    navigate('/')
  }

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {isEditing === false ? (
        <div className="evDet">
          <div className="eventBox">
            <h3>{data.name}</h3>
            <p>Location: {data.location}</p>
            <p>Date: {data.date}</p>
            <p>Description: {data.description}</p>
            <p>Organiser: {data.added_by_user}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : (
        <EditEvent id={numId} initialForm={data} fn={stopEditing} />
      )}
    </div>
  )
}

// //join to come in function for this card to display the users name from the users table
// //and a join button to populate the third table to do the many to many joins
// //add photo
