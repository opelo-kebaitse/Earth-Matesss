import connection from './connection.ts'

export async function getUserDetail(auth0Id:string, db = connection) {
  return  db('users').where({auth0Id}).select('*').first()
}