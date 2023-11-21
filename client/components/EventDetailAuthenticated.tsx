import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditEvent from './EditEvent'
import { useEvents, useEvent } from '../hooks/useEvents.ts'
import { useAuth0 } from '@auth0/auth0-react'

export default function EventDetailsAuthenticated() {
  const { id } = useParams()
  const numId = Number(id)

  const navigate = useNavigate()

  // State to manage whether to show the edit form
  const [isEditing, setIsEditing] = useState(false)

  //get user and token
  const { getAccessTokenSilently, user } = useAuth0()

  //create a state for if user can edit/delete
  const [isContributor, setIsContributor] = useState(false)

  // const {
  //   data: event,
  //   isLoading,
  //   error,
  // } = useQuery(['event', id], () => getEventDetail(numId))

  const { data, isLoading, error } = useEvent(numId)
  const events = useEvents()

  useEffect(() => {
    if (user?.sub === data?.added_by_user) {
      setIsContributor(true)
    }
  }, [user, data])

  const stopEditing = () => {
    setIsEditing(!isEditing)
  }

  // Function to handle the "Edit" button click and show the form
  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleDelete = async () => {
    const token = await getAccessTokenSilently()
    events.delete.mutate({ numId, token })
    navigate('/')
  }

  const handleJoin = () => {
    console.log(
      `user with ${user?.email} wants to join this lets write a function for that!`
    )
  }

  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!data || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {isContributor === false ? (
        <div className="evDet">
          <div className="eventBox">
            <h3>{data.eventName}</h3>
            <p>Location: {data.location}</p>
            <p>Date: {data.date}</p>
            <p>Description: {data.description}</p>
            <p>Organiser: {data.userName}</p>
            <button onClick={handleJoin}>Join</button>
          </div>
        </div>
      ) : null}
      {isEditing === false && isContributor === true ? (
        <div className="evDet">
          <div className="eventBox">
            <h3>{data.eventName}</h3>
            <p>Location: {data.location}</p>
            <p>Date: {data.date}</p>
            <p>Description: {data.description}</p>
            <p>Organiser: {data.userName}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : null}
      {isEditing === true && isContributor === true ? (
        <EditEvent id={numId} data={data} fn={stopEditing} />
      ) : null}
    </div>
  )
}

// //join to come in function for this card to display the users name from the users table
// //and a join button to populate the third table to do the many to many joins
// //add photo
// refactor!!!
