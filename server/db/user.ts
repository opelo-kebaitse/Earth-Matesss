import connection from './connection.ts'
import { NewUser } from '../../models/Event.ts'

// Knex returns a promise by default. No need for the async keyword in this situation. 
// Only use async with await
export async function getUserDetail(auth0Id:string, db = connection) {
  return  db('users').where({auth0Id}).select('*').first()
}


export function newUser(newUserData: NewUser) {
  return connection('users')
    .insert({ ...newUserData })
    .returning([
      'auth0Id',
      'name',
      'email'])
}

