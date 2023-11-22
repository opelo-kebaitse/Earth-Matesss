import connection from './connection.ts'
import { NewUser } from '../../models/Event.ts'

export async function getUserDetail(auth0Id:string, db = connection) {
  return  db('users').where({auth0Id}).select('*').first()
}


// function to add a new event

export function newUser(newUserData: NewUser) {
  return connection('users')
    .insert({ ...newUserData })
    .returning([
      'id',
      'auth0Id',
      'name',
      'email'])
}

