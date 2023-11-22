import request from 'superagent'

const rootURL = '/api/v1/users'

export async function getUserDetail(token) {
  const res = await request.get(rootURL).set('Authorization', `Bearer ${token}`)
  return (res.body.userDetail ? res.body.userDetail : null)
}