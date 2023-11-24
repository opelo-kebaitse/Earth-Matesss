import { Router } from 'express'
// The next two imports could be combined into one line. Just import the db events functions you need
import * as db from '../db/events.ts'
import { newJoin } from '../db/events.ts'

import { JwtRequest } from '../auth0.ts'

const router = Router()

// Be consistent with eventsRoutes and use Try/Catch blocks
//Post route /api/v1/joins
router.post('/', async (req: JwtRequest, res) => {
    const newestJoin = req.body 
    const attendingList= await db.userIsAttending(newestJoin.user)
    if (attendingList.some((listItem) => listItem.event_id === newestJoin.event_id)) {
        console.error('User already attending Event')
        // Use status code 409 Conflict
        return res.status(403).send("User already attending event")
    }
    const addedJoin = await newJoin(newestJoin)
    res.json(addedJoin) 
  })
  
  export default router
