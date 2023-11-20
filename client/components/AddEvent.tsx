import { useState } from 'react'
import { NewEvent } from '../../models/Event'
import { useEvents } from '../hooks/useEvents.ts'
import { useNavigate } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'



function AddEvent() {

  // Destructured getAccessTokenSilently
  const {getAccessTokenSilently, user} = useAuth0()
// console.log(user?.sub)
  const userId  = user?.sub

  const initialForm: NewEvent = {
    name: '',
    date: '',
    location: '',
    photo: 'images/placeholder.jpg',
    description: '',
    added_by_user: userId as string
  }

  const events = useEvents()
  const navigate = useNavigate()

  const [newEvent, setNewEvent] = useState(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEvent({ ...newEvent, [name]: value })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()


// call getAccessTokenSilently to retrieve the access token
const token: string = await getAccessTokenSilently()

// pass the token as a second parameter of the add function 
    events.add.mutate({newEvent, token})
    navigate('/')
  }

  return (
    <>
      <h2>Create event</h2>
      <form className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newEvent.name}
          onChange={handleChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          value={newEvent.date}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={newEvent.location}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={newEvent.description}
          onChange={handleChange}
        />
        {/* <input
          type="hidden"
          name="added_by_user"
          value={user?.sub} /> */}
        <button className="post-event" onClick={handleSubmit}>
          Post event!
        </button>
      </form>
    </>
  )
}

//Would like to change the navigation to go to the individual event page, but need to work out how to give it the correct id
//have just set this up to start with using the fields we have not the ones on the image as have realised on our wire frame it says time but we don't have that elsewhere
//Also we talked about a drop down of suburbs, think this may have become stretch aye?
//For date do we want a date picker?
//Need to add Auth0 here still

export default AddEvent
