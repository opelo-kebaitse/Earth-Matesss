import connection from './connection.ts'

import { NewEvent, Event, DisplayEvent, NewJoin } from '../../models/Event.ts'

//function to get the details we need for the list of events
// export function getEventList(db = connection) {
//   // const currentDate = new Date().getTime()

//   return db('events')
 
// //     .select('*')
//  // }


//function to get details for event lists and public display
export function getEventList( db = connection) {
  return connection ('events')
    .join('users', 'events.added_by_user', 'users.auth0Id')
    .select(
      'events.id'
      'events.name as eventName',
      'events.location',
      'events.date',
      'events.description',
      'users.name as userName',
'events.photo',
    )
    .first()
}


//function to add a new event
export function newEvent(newEventData: NewEvent, db= connection) {
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
export function newJoin(newJoinData: NewJoin, db= connection) {
  // console.log(`db join`, newJoin)
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

export async function updateEvent(id: number, updatedEventData: Event, db= connection) {
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
