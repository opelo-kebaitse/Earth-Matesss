import { ListEvent, SavedEvent } from '../../models/event.ts'
import connection from './connection.ts'

import { NewEvent } from '../../models/event.ts'

export async function getEventList(db = connection) {
  // return db('events').select('name', 'location', 'date')

return db('events').select('*')

}

export function newEvent(newEventData: NewEvent) {
  return connection('events')
    .insert({ ...newEventData })
    .returning(['id', 'name', 'location', 'date','description', 'added_by_user', 'photo'])



export async function getEventDetails(
  id: number,
  db = connection
): Promise<SavedEvent> {
  return db('events').where({ id }).select('*').first()
}

