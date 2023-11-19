import { Event } from '../../models/Event'
import { useState } from 'react'
import { useEvents } from '../hooks/event'

type EditEventFunction = () => void
interface EditEventProps {
  id: number
  initialForm: Event
  fn: EditEventFunction
}

function EditEvent({ id, initialForm, fn }: EditEventProps) {
  const [formData, setFormData] = useState<Event>(initialForm)
  const events = useEvents()


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    events.edit.mutate(formData)
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
        <button onClick = {handleSubmit}>Update Event2</button>
        
      </form>
    </>
  )
}


export default EditEvent

//Need to add Auth0 here still
