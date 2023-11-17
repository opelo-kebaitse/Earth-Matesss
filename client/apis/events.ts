import request from 'superagent'

const rootURL = '/api/v1'

export async function getEventList() {
  const res = await request.get(rootURL + '/events')
  return res.body
}


//function to call the server route to add an event and send the event data to it, then sent that data back to the component function
export async function addEvent(newEvent: NewEvent): Promise<Event> {
  const res = await request.post(`${rootURL}/events`).send(newEvent)
  return res.body
}