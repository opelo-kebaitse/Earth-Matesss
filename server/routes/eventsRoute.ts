import { Router } from 'express'
import * as db from '../db/events.ts'
import { newEvent, newJoin } from '../db/events.ts'

import checkJwt, { JwtRequest } from '../auth0.ts'

const router = Router()

// route to get events list /api/v1/events

router.get('/', async (req, res) => {
  try {
    const events = await db.getEventList()
    res.json(events)
  } catch (error) {
    res.status(500).json('Internal server error')
  }
})


// post route /api/v1/events
router.post('/', async (req: JwtRequest, res) => {
  const newestEvent = req.body // Retrieve the new  data from the request body.
  // console.log(req.body)
  const addedEvent = await newEvent(newestEvent)
  // Use the new function to add the new url to the database and await the promise it returns.
  res.json(addedEvent) // Respond with the data of the newly added data in JSON format.
})

// route to get event list by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const id = Number(req.params.id)
    const event = await db.getEventDetails(id)
    res.json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

//function to update an event, it checks if there is an id, then tries to update, catching errors if they happen
router.patch('/:id', async (req: JwtRequest, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const updatedEvent = await db.updateEvent(id, req.body)
    res.json(updatedEvent)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

//function to delete an event, checks id, trys and catches errors if they happen
router.delete('/:id', async (req: JwtRequest, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const deletedEvent = await db.deleteEvent(id)
    res.json(deletedEvent)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})




export default router
