import connection from './connection.ts'

export async function getEventList(db = connection) {
  return db('events').select('name', 'location', 'date')
}
