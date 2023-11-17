import request from 'superagent'

const rootURL = '/api/v1'

export async function getEventList() {
  console.log('hello')
  const res = await request.get(rootURL + '/events')
  console.log('API', res.body)
  return res.body
}