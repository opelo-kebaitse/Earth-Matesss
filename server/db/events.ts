import connection from './connection.ts'

import { NewEvent, Event, DisplayEvent, NewJoin } from '../../models/Event.ts'

// REMOVE ALL COMMENTED OUT CODE
// Consistent database connection usage: The file uses both db (passed as a parameter with a default value of connection) and connection directly. 
// It would be better to consistently use the db parameter to make it easier to test these functions by passing in a mock or alternative database connection.
// Async syntax should only be used when using await. Knex returns promises by default so it is not necessary to specify async

//function to get the details we need for the list of events
export async function getEventList(db = connection) {
  // return db('events').select('name', 'location', 'date', 'id, 'photo')
  // const currentDate = new Date().getTime()

  // return db('events').where('date', '>', currentDate).select('*').orderby('date')
  return db('events')
    // .where('date', '>=', currentDate)
    .select('*')
    // .orderBy('date')
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

// --------------- Join DB FUNCTIONS
// function to add a new join
export function newJoin(newJoinData: NewJoin) {
  return connection('users_attending_events')
    .insert({ ...newJoinData })
    .returning([
      'event_id',
      'user' 
    ])
}

export async function userIsAttending(
  user: string,
  db = connection
){
  return db('users_attending_events')
  .where({user})
  .select('*')
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

// This needs some work. In this case, async await is probably appropriate since you need
// one operation to finish first. And as noted, you should delete the users_attending_event entry as part
// of this operation
//function to delete an event
//I think this will need to delete the users_attending_as_well possibly
export async function deleteEvent(id: number, db = connection) {
  await db('users_attending_events').where('event_id', id).del()
  return db('events').where({ id }).del()
}
