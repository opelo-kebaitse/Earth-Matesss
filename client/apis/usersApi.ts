import request from 'superagent'
import { NewUser } from '../../models/Event'

const rootURL = '/api/v1/users'

export async function getUserDetail(token: string) {
  const res = await request.get(rootURL).set('Authorization', `Bearer ${token}`)
  return (res.body.userDetail ? res.body.userDetail : null)
}

type AddUserParams = {
  formData: NewUser
  token: string
}
// Post route to add a user api/v1/users
//receive info and send to backend the return 
export async function addNewUser({formData, token}:AddUserParams) {
  const res = await request.post(rootURL).set('Authorization', `Bearer ${token}`).send(formData)
  return res.body
}
