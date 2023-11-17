import { Router } from 'express'
import * as db from '../db/events.ts'
import { newEvent } from '../db/events.ts'

const router = Router()

// route to get events list

router.get('/', async (req, res) => {
  try {
    const events = await db.getEventList()
    res.json(events)
  } catch (error) {
    res.status(500).json('Internal server error')
  }
})

router.post('/', async (req, res) => {
  const newestEvent = req.body // Retrieve the new  data from the request body.
  const addedEvent = await newEvent(newestEvent) // Use the newUrl function to add the new url to the database and await the promise it returns.
  res.json(addedEvent) // Respond with the data of the newly added data in JSON format.
})

export default router
