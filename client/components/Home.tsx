import { useNavigate } from 'react-router-dom'
import EventList from './EventList'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="page-title">
        Find like-minded people doing cool things for the whenua in your hapori!
      </h2>
      <div className="event-container">
        <button className="crEve-button" onClick={() => navigate('/AddEvent')}>
          Create Event
        </button>
      </div>
      <EventList />
    </>
  )
}

export default Home
