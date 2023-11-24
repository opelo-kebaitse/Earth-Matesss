import request from 'superagent'
import {
  Event,
  NewEvent,
  DisplayEvent,
  NewJoin,
} from '../../models/Event.ts'


// consider moving your type definitions to your models folder, or at least group them together. 
// Is there any duplication here with your types and what you have in models?
const rootURL = '/api/v1'

// Use of Template Literals: When constructing URLs, you're sometimes adding strings and sometimes using template literals. 
// Choose one method for consistency.
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
  const res = await request
    .post(`${rootURL}/events`)
    .set('Authorization', `Bearer ${token}`)
    .send(newEvent)
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
  const res = await request
    .patch(`${rootURL}/events/${updatedEvent.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedEvent)
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



// Yes to the below.
// ----------- JOIN API FUNCTIONS ---pull out in refactor to put in separate file

type JoinEventParams = {
  newJoin: NewJoin
  token: string
}
export async function joinEvent({
  newJoin,
  token,
}: JoinEventParams): Promise<NewJoin> {
  const res = await request
    .post(`${rootURL}/joins`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
  return res.body
}
