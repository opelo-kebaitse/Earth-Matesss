import request from 'superagent'
import { Event, ListEvent } from '../../models/Event.ts'

const rootURL = '/api/v1'

export async function getEventList(): Promise<ListEvent[]> {
  const res = await request.get(rootURL + '/events')
  return res.body
}

//function to call the server route to add an event and send the event data to it, then sent that data back to the component function
export async function addEvent(newEvent: NewEvent): Promise<Event> {
  const res = await request.post(`${rootURL}/events`).send(newEvent)
  return res.body
}

//clientside api call to get details for one event
export async function getEventDetail(id: number): Promise<Event> {
  const res = await request.get(`${rootURL}/events/${id}`)
  return res.body
}

//clientside api call to edit an event

export async function editEvent(updatedEvent: Event): Promise<Event> {
  console.log('updatedEvent', updatedEvent)
  console.log('rootURL', rootURL, updatedEvent.id)
  const res = await request
    .patch(`${rootURL}/events/${updatedEvent.id}`)
    .send(updatedEvent)
  return res.body
}

//clientside api call to delete an event
export async function deleteEvent(id: number) {
  const res = await request.delete(`${rootURL}/events/${id}`)
  return res.body
}

// hardcoded function to show a page
// export async function getEventDetail(id: number) {
//   console.log(`tried to go to ${id} event`)
//   const eventDetails = {
//     name: 'Beach clean-up at Mission Bay',
//     location: 'Auckland',
//     date: '2023-12-05',
//     description:
//       'Beach clean-up at Mission Bay. Bring your own bucket and spade - it’s like building sandcastles, but for grown-ups!',
//     added_by_user: 'auth0|101',
//     photo: 'mission_bay_cleanup.jpg',
//   }
//   return eventDetails
// }