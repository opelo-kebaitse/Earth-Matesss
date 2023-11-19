import connection from './connection.ts'

import { NewEvent, Event } from '../../models/Event.ts'

//function to get the details we need for the list of events
export async function getEventList(db = connection) {
  // return db('events').select('name', 'location', 'date', 'id, 'photo')

  return db('events').select('*')
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
): Promise<Event> {
  return db('events').where({ id }).select('*').first()
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
  return db('events').where({ id }).del()
}
