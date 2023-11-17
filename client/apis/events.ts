import request from 'superagent'

const rootURL = '/api/v1'

export async function getEventList() {
  const res = await request.get(rootURL + '/events')
  return res.body
}

export async function getEventDetail(id: number): Promise<Event> {
  const res = await request.get(`${rootURL}/events/${id}`)
  return res.body
}
