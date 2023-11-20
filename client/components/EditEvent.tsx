import { Event } from '../../models/Event'
import { useState } from 'react'
import { useEvent } from '../hooks/useEvents'
import { useAuth0 } from '@auth0/auth0-react'

type EditEventFunction = () => void
interface EditEventProps {
  id: number
  data: Event
  fn: EditEventFunction
}

function EditEvent({ id, data, fn }: EditEventProps) {
  const [formData, setFormData] = useState<Event>(data)
  const event = useEvent(id)
  const { getAccessTokenSilently } = useAuth0()

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    const updatedEvent = formData
    event.edit.mutate({ updatedEvent, token })
    fn()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <form>
        <label htmlFor="name"> Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="location"> Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="date"> Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="photo"> Photo:</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={formData.photo}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Update Event!</button>
      </form>
    </>
  )
}

export default EditEvent

//Need to add Auth0 here still
