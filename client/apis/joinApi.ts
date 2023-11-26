import request from 'superagent'
import { JoinEventParams, NewJoinEvent } from "../../models/Event"

const rootURL = '/api/v1'


export async function joinEvent({
  newJoin,
  token,
}: JoinEventParams): Promise<NewJoinEvent> {
  const res = await request
    .post(`${rootURL}/joins`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
  return res.body
}