import request from 'superagent'
import {
  Event,
  NewEvent,
  DisplayEvent,
  PublicDisplayEvent,
  NewJoin,
} from '../../models/Event.ts'

const rootURL = '/api/v1'

export async function getEventList(): Promise<Event[]> {
  const res = await request.get(rootURL + '/events')
  return res.body
}

//function to call the server route to add an event and send the event data to it, then sent that data back to the component function
type AddEventParams = {
  newEvent: NewEvent
  token: string
}
export async function addEvent({
  newEvent,
  token,
}: AddEventParams): Promise<Event> {
  console.log('api', newEvent)
  const res = await request
    .post(`${rootURL}/events`)
    .set('Authorization', `Bearer ${token}`)
    .send(newEvent)
  console.log('res.bodyAdd', res.body)
  return res.body
}

//clientside api call to get details for one event
export async function getEventDetail(id: number): Promise<DisplayEvent> {
  const res = await request.get(`${rootURL}/events/${id}`)
  return res.body
}

//type for edit event
type editEventParams = {
  updatedEvent: Event
  token: string
}

//clientside api call to edit an event
export async function editEvent({
  updatedEvent,
  token,
}: editEventParams): Promise<Event> {
  console.log('updatedEvent', updatedEvent)
  const res = await request
    .patch(`${rootURL}/events/${updatedEvent.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedEvent)
  console.log('res.body', res.body)
  return res.body
}

//type for delete event
type deleteEventParams = {
  numId: number
  token: string
}

//clientside api call to delete an event
export async function deleteEvent({ numId, token }: deleteEventParams) {
  const res = await request
    .delete(`${rootURL}/events/${numId}`)
    .set('Authorization', `Bearer ${token}`)
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

// ----------- JOIN API FUNCTIONS ---pull out in refactor to put in separate file

type JoinEventParams = {
  newJoin: NewJoin
  token: string
}
export async function joinEvent({
  newJoin,
  token,
}: JoinEventParams): Promise<NewJoin> {
  // console.log(`newJoin`, newJoin)
  const res = await request
    .post(`${rootURL}/joins`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
    // console.log('api return', res.body)
  return res.body
}
