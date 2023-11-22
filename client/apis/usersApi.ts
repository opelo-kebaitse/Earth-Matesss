import request from 'superagent'

const rootURL = '/api/v1/users'


export async function getUserDetail(token) {
  const res = await request.get(rootURL).set('Authorization', `Bearer ${token}`)
  return (res.body.userDetail ? res.body.userDetail : null)
}

// Post route to add a user api/v1/users
//receive info and send to backend the return 
