import { Router } from 'express'
import * as db from '../db/events.ts'

const router = Router()

// route to get events list

router.get('/', async (req, res) => {
  try {
    console.log('ROUTES')
    const events = await db.getEventList()
    console.log(events)
    res.json(events)
  } catch (error) {
    res.status(500).json('Internal server error')
  }
})

export default router
