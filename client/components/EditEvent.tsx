import { useState } from 'react'
import { NewEvent } from '../../models/Event'
import { useEvents } from '../hooks/event.ts'

function EditEvent() {
  const id = Number(useParams())
  

  const initialForm: NewEvent = {
    name: event.name,
    date: event.date,
    location: event.location,
    photo: event.photo,
    description: event.description,
    added_by_user: event.added_by_user,
  }
  
  const events = useEvents()

  const [event, setEdittedEvent] = useState(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEdittedEvent({ ...event, [name]: value,})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    events.edit.mutate(event)
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