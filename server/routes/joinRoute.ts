import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { addNewJoin, userIsAttending } from '../db/joins.ts'

const router = Router()

//Get route /api/v1/joins
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const userId = req.auth?.sub
  if (!userId) {
    console.error('no user')
    return res.status(401).send('No user')
  }

  try {
    const attendingList = await userIsAttending(userId)
    res.json(attendingList)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

//Post route /api/v1/joins
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const newestJoin = {...req.body, user: req.auth?.sub} // WHere should we be retrieving that data, we have the console.logs but this is TBC!!!!!
  const attendingList = await userIsAttending(newestJoin.user)
  if (
    attendingList.some((listItem) => listItem.event_id === newestJoin.event_id)
  ) {
    console.error('User already attending Event')
    return res.status(409).send('User already attending event')
  }
  const addedJoin = await addNewJoin(newestJoin)
  // Use the new function to add the new join to the database and await the promise it returns.
  // console.log('route:addedJoin', addedJoin)
  res.json(addedJoin) // Respond with the data of the newly added data in JSON format.
})

export default router
