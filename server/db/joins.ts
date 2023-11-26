import { NewJoin } from '../../models/Event'
import connection from './connection'

export function addNewJoin(newJoinData: NewJoin, db = connection) {
  return db('users_attending_events')
    .insert({ ...newJoinData })
    .returning(['event_id', 'user', 'is_creator'])
}

export function userIsAttending(user: string, db = connection) {
  return db('users_attending_events').where({ user }).select('*')
}
