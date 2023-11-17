import { Link } from 'react-router-dom'
import EventList from './EventList'

function Home() {
  return (
    <>
      <h2 className="page-title">
        Find like-minded people doing cool things for the whenua in your hapori!
      </h2>
      <button>
        <Link to="/AddEvent">Create Event</Link>
      </button>
      <EventList />
    </>
  )
}

export default Home
