import request from 'superagent'
import { Event } from '../../models/event'

const rootURL = '/api/v1'

export async function getEventList() {
  const res = await request.get(rootURL + '/events')
  return res.body
}

export async function getEventDetail(id: number): Promise<Event> {
  const res = await request.get(`${rootURL}/events/${id}`)
  return res.body
}

// hardcoded function to show a page
// export async function getEventDetail(id: number) {
//   console.log(`tried to go to ${id} event`)
//   const eventDetails = {
//     name: 'Beach clean-up at Mission Bay',
//     location: 'Auckland',
//     date: '2023-12-05',
//     description:
//       'Beach clean-up at Mission Bay. Bring your own bucket and spade - it’s like building sandcastles, but for grown-ups!',
//     added_by_user: 'auth0|101',
//     photo: 'mission_bay_cleanup.jpg',
//   }
//   return eventDetails
// }
