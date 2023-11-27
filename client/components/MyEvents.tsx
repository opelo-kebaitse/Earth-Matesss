import EventList from './EventList'
import { useEvents } from '../hooks/useEvents'


export default function MyEvents() {
  const events = useEvents()
 return (
   <>
     <h1 className="title-container">This is the My Events Page</h1>
  
     <EventList events={events} />
   </>
 )
}