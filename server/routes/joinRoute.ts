import { Router } from 'express'
import * as db from '../db/events.ts'
import { newEvent, newJoin } from '../db/events.ts'

import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()


//Post route /api/v1/joins
router.post('/', async (req: JwtRequest, res) => {
    const newestJoin = req.body // WHere should we be retrieving that data, we have the console.logs but this is TBC!!!!!
    // console.log(req.body)
    const attendingList= await db.userIsAttending(newestJoin.user)
    console.log('attendingList', attendingList)
    if (attendingList.some((listItem) => listItem.event_id === newestJoin.event_id)) {
        console.error('User already attending Event')
        res.status(403).send("User already attending event")
    }
    const addedJoin = await newJoin(newestJoin)
    // Use the new function to add the new join to the database and await the promise it returns.
    // console.log('route:addedJoin', addedJoin)
    res.json(addedJoin) // Respond with the data of the newly added data in JSON format.
  })
  
  
  export default router
