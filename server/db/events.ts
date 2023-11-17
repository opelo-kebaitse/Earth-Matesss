import { ListEvent, SavedEvent } from '../../models/event.ts'
import connection from './connection.ts'

export async function getEventList(db = connection): Promise<ListEvent[]> {
  return db('events').select('name', 'location', 'date', 'id')
}

export async function getEventDetails(
  id: number,
  db = connection
): Promise<SavedEvent> {
  return db('events').where({ id }).select('*').first()
}
