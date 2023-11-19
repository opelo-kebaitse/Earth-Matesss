import { useState } from 'react'
import { NewEvent } from '../../models/Event'
import { useEvents } from '../hooks/event.ts'
import { useNavigate } from 'react-router-dom'

function AddEvent() {
  const initialForm: NewEvent = {
    name: '',
    date: '',
    location: '',
    photo: 'images/placeholder.jpg',
    description: '',
    added_by_user: 'Auth0|123',
  }

  const events = useEvents()
  const navigate = useNavigate()

  const [newEvent, setNewEvent] = useState(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEvent({ ...newEvent, [name]: value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    events.add.mutate(newEvent)
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
