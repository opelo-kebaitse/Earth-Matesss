import { Router } from 'express'
import * as db from '../db/events.ts'
import { newEvent } from '../db/events.ts'

import checkJwt, { JwtRequest } from '../auth0.ts'


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

router.post('/', async (req: JwtRequest, res) => {
  const newestEvent = req.body.newEvent // Retrieve the new  data from the request body.
  console.log(newestEvent)
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
    const event = await db.getEventDetails(id)
    res.json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

//function to update an event, it checks if there is an id, then trys to update, catching errors if they happen
router.patch('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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
