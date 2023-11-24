import connection from './connection.ts'

import { NewEvent, Event, DisplayEvent } from '../../models/Event.ts'

//function to get the details we need for the list of events
export async function getEventList(db = connection) {
  // return db('events').select('name', 'location', 'date', 'id, 'photo')
  const currentDate = new Date().toISOString()
  

  // return db('events').where('date', '>', currentDate).select('*').orderby('date')
  return db('events')
    .where('date', '>=', currentDate)
    .select('*')
    .orderBy('date')
}

//function to add a new event
export function newEvent(newEventData: NewEvent) {
  return connection('events')
    .insert({ ...newEventData })
    .returning([
      'id',
      'name',
      'location',
      'date',
      'description',
      'added_by_user',
      'photo',
    ])
}

//function to get details of a single event
export async function getEventDetails(
  id: number,
  db = connection
): Promise<DisplayEvent> {
  return db('events')
    .join('users', 'events.added_by_user', 'users.auth0Id')
    .where({ id })
    .select(
      'events.name as eventName',
      'events.location',
      'events.date',
      'events.description',
      'users.name as userName',
      'users.email',
      'events.photo',
      'users.auth0Id'
    )
    .first()
}

export async function updateEvent(id: number, updatedEventData: Event) {
  return connection('events')
    .where({ id })
    .update({ ...updatedEventData })
    .returning([
      'id',
      'name',
      'location',
      'date',
      'description',
      'added_by_user',
      'photo',
    ])
}

//function to delete an event
//I think this will need to delete the users_attending_as_well possibly
export async function deleteEvent(id: number, db = connection) {
  await db('users_attending_events').where('event_id', id).del()
  return db('events').where({ id }).del()
}
