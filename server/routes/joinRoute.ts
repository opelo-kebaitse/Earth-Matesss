import { Router } from 'express'
import { newJoin, userIsAttending } from '../db/events.ts'

import { JwtRequest } from '../auth0.ts'

const router = Router()

// Be consistent with eventsRoutes and use Try/Catch blocks
//Post route /api/v1/joins
router.post('/', async (req: JwtRequest, res) => {
    const newestJoin = req.body 
    const attendingList= await userIsAttending(newestJoin.user)
    if (attendingList.some((listItem) => listItem.event_id === newestJoin.event_id)) {
        console.error('User already attending Event')
        // Use status code 409 Conflict
        return res.status(403).send("User already attending event")
    }
    const addedJoin = await newJoin(newestJoin)
    res.json(addedJoin) 
  })
  
  export default router
