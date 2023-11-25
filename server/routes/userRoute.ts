import { Router } from 'express'

import checkJwt, { JwtRequest } from '../auth0.ts'
import { getUserDetail, newUser } from '../db/user.ts'
const router = Router()

//Get route for /api/v1/users
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const userDetail = await getUserDetail(auth0Id)
    res.json({ userDetail })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// post route /api/v1/users
router.post('/', async (req: JwtRequest, res) => {
  const newestUser = req.body
  const addedUser = await newUser(newestUser)
  res.json(addedUser) 
})

export default router
