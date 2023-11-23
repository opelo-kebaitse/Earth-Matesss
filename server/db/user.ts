import connection from './connection.ts'
import { NewUser } from '../../models/Event.ts'

export async function getUserDetail(auth0Id:string, db = connection) {
  return  db('users').where({auth0Id}).select('*').first()
}


// function to add a new User

export function newUser(newUserData: NewUser) {
  console.log('newUse DB receives:', newUserData)
  return connection('users')
    .insert({ ...newUserData })
    .returning([
      'auth0Id',
      'name',
      'email'])
}

