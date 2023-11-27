import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditEvent from './EditEvent'
import { useEvents, useEvent } from '../hooks/useEvents.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { useJoin } from '../hooks/useJoins.ts'
import { NewJoinEvent } from '../../models/Event.ts'


export default function EventDetailsAuthenticated() {
  const { id } = useParams()
  const numId = Number(id)

  const navigate = useNavigate()

  // State to manage whether to show the edit form
  const [isEditing, setIsEditing] = useState(false)

  //
  const [isJoined, setIsJoined] = useState(false)

  //get user and token
  const { getAccessTokenSilently, user } = useAuth0()

  //create a state for if user can edit/delete
  const [isContributor, setIsContributor] = useState(false)

  const { data, isLoading, error } = useEvent(numId)
  const events = useEvents()
  const joins = useJoin()

  // console.log('joins info for user:', joins.data)
  console.log('eventId', data?.id)

  useEffect(() => {
    console.log('if you are seeing this then the contributor is', isContributor)
  },
    [isContributor])


  useEffect(() => {
    console.log('joinsData', joins.data)

    if(joins?.data) {      
      const thisEvent = joins.data.find((join) => join.event_id === data?.id)
      if (thisEvent?.is_creator == true) {
        setIsContributor(true)
      }
      if (thisEvent?.is_creator == false) {
        setIsJoined(true)
        console.log('this should be now joined', isJoined)
      }
    } else { 
      console.log('we want data')
    }
  }, [data?.id, joins.data, isJoined ])


  // Function to handle the "Edit" button click and show the form
  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleDelete = async () => {
    const token = await getAccessTokenSilently()
    events.delete.mutate({ numId, token })
    navigate('/')
  }

  // JOIN - HANDLE JOIN FUNCTION

  const handleJoin = async () => {
    if (user === undefined) {
      return console.log('no data to make join')
    }
    const newJoin = { event_id: numId, is_creator: false }

    const token = await getAccessTokenSilently()
    joins.add.mutate({ newJoin, token })
    // navigate('/my-events')
  }

  const stopEditing = () => {
    setIsEditing(false)
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
            <button className={`join-button ${isJoined ? 'joined' : ''}`}
            onClick={handleJoin}>
              {' '}
              {isJoined ? 'Joined' : 'Join'}
            </button>
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
            <button className="join-button" onClick={handleEditClick}>
              Edit
            </button>
            <button className="join-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : null}
      {isEditing === true && isContributor === true ? (
        <EditEvent id={numId} data={data} fn={stopEditing} />
      ) : null}
    </div>
  )
}

// refactor!!!
