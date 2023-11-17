import connection from './connection.ts'

export async function getEventList(db = connection) {
  return db('events').select('name', 'location', 'date', 'id')
}

export async function getEventDetails(id, db = connection) {
  return db('events').where({ id }).select('name', 'location', 'date', 'id')
}
