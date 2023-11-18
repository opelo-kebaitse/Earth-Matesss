import { useState } from 'react'
import { NewEvent } from '../../models/Event'
import { useEvents } from '../hooks/event.ts'
import { useParams, useNavigate } from 'react-router-dom'

function EditEvent() {
  const { id } = useParams()
  const numId = Number(id)
  const navigate = useNavigate()
  

  const initialForm: Event = {
    id: numId,
    name: '',
    date: '',
    location: '',
    photo: 'images/placeholder.jpg',
    description: '',
    added_by_user: 'Auth0|123',
  }
  
  const events = useEvents()

  const [event, setEdittedEvent] = useState(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEdittedEvent({ ...event, [name]: value,})
    console.log('event', event)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('id', id, 'event', event)
    events.edit.mutate(event)
    navigate(`/${id}`)
  }

  return (
    <>
      <h2>Edit your event</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={event.name}
          onChange={handleChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          value={event.date}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={event.location}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={event.description}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Update event!</button>
      </form>
    </>
  )
}


//Need to add Auth0 here still

export default EditEvent