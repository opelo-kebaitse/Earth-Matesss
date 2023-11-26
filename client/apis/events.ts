import request from 'superagent'
import {
  Event,
  DisplayEvent,
  NewJoinEvent,AddEventParams, EditEventParams, DeleteEventParams, JoinEventParams
} from '../../models/Event.ts'

const rootURL = '/api/v1'

// Use of Template Literals: When constructing URLs, you're sometimes adding strings and sometimes using template literals. 
// Choose one method for consistency.
export async function getEventList(): Promise<Event[]> {
  const res = await request.get(rootURL + '/events')
  return res.body
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


//clientside api call to edit an event
export async function editEvent({
  updatedEvent,
  token,
}: EditEventParams): Promise<Event> {
  const res = await request
    .patch(`${rootURL}/events/${updatedEvent.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedEvent)
  return res.body
}


//clientside api call to delete an event
export async function deleteEvent({ numId, token }: DeleteEventParams) {
  const res = await request
    .delete(`${rootURL}/events/${numId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}


// Yes to the below.
// ----------- JOIN API FUNCTIONS ---pull out in refactor to put in separate file


export async function joinEvent({
  newJoin,
  token,
}: JoinEventParams): Promise<NewJoinEvent> {
  const res = await request
    .post(`${rootURL}/joins`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
  return res.body
}
