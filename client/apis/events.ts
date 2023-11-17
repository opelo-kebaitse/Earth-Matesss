import request from 'superagent'

const rootURL = '/api/v1'

export async function getEventList() {
  const res = await request.get(rootURL + '/events')
  return res.body
}