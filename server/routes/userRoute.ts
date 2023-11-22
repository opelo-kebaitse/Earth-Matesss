import { Router } from 'express'
import * as db from '../db/events.ts'
import { newEvent } from '../db/events.ts'

import checkJwt, { JwtRequest } from '../auth0.ts'
import * as db from '../db/user.ts'
const router = Router()

//Get route for /api/v1/users
router.get('/', checkJwt, async (req: JwtRequest, res) => {
 try {
   const auth0Id = req.auth.sub
   const userDetail = await db.getUserDetail(auth0Id)
   res.json(userDetail)
 }catch (error){
    console.error(error) 
    res.status(500).send('Something went wrong')
 }
})

export default router