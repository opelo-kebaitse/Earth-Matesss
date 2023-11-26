import request from 'superagent'
import { NewJoin } from '../../models/Event'

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

type JoinEventParams = {
  newJoin: NewJoin
  token: string
}

export async function joinEvent({
  newJoin,
  token,
}: JoinEventParams): Promise<NewJoin> {
  // console.log(`newJoin`, newJoin)
  const res = await request
    .post(`${rootURL}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
  // console.log('api return', res.body)
  return res.body
}
