import request from 'superagent'
import { JoinEventParams } from '../../models/Event'

const rootURL = '/api/v1/joins'

//this needs something done with the error (maybe a utils to handle errors? )
export async function getJoins(token: string) {
  try {
    const res = await request
      .get(`${rootURL}`)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (error) {
    console.error(error)
  }
}

export async function joinEvent({ newJoin, token }: JoinEventParams) {
  const res = await request
    .post(`${rootURL}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)

  return res.body
}
