import request from 'superagent'
import {
  Event,
  EditEventParams,
  DeleteEventParams,
  AddEventParams,
} from '../../models/Event.ts'
import { logError } from './utils.ts'

const rootURL = '/api/v1'

export async function getEventList(): Promise<Event[]> {
  return request
    .get(rootURL + '/events')
    .then((res) => res.body)
    .catch(logError)
}

//function to call the server route to add an event and send the event data to it, then sent that data back to the component function

export async function addEvent({
  newEvent,
  token,
}: AddEventParams): Promise<Event> {
 return request
    .post(`${rootURL}/events`)
    .set('Authorization', `Bearer ${token}`)
    .send(newEvent)
    .then((res) => res.body.newEvent)
    .catch(logError)
}

//clientside api call to get details for one event
export async function getEventDetail(id: number) {
  return request
    .get(`${rootURL}/events/${id}`)
    .then((res) => res.body)
    .catch(logError)
}

//clientside api call to edit an event
export async function editEvent({ updatedEvent, token }: EditEventParams) {
 
  return request
  .patch(`${rootURL}/events/${updatedEvent.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedEvent)
      .then((res) => res.body)
      .catch(logError)
}
//clientside api call to delete an event
export async function deleteEvent({ numId, token }: DeleteEventParams) {
  return request
    .delete(`${rootURL}/events/${numId}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}