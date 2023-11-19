import { Router } from 'express'
import * as db from '../db/events.ts'

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

// route to get event list by id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const event = await db.getEventDetails(id)
    res.json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json('Interal server error')
  }
})

export default router
