// You could be using extends here to avoid so much repetition
// interface NewEvent {
//   name: string
//   location: string
//   date: number 
//   description: string
//   added_by_user: string
//   photo: string
// }

// interface Event extends NewEvent {
//   id: string
// }
// etc.
export interface Event {
  id: number
  name: string
  location: string
  date: number
  description: string
  added_by_user: string
  photo: string
}

export interface NewEvent {
  name: string
  location: string
  date: number 
  description: string
  added_by_user: string
  photo: string
}

export interface DisplayEvent {
  id: number
  eventName: string
  location: string
  date: number
  description: string
  userName: string
  email: string
  photo: string
  auth0Id: string
}

export interface PublicDisplayEvent {
  id: number
  eventName: string
  location: string
  date: number
  description: string
  userName: string
  photo: string
}

// A more descriptive name would be nice
export interface NewJoin {
  event_id: number
  user: string
}

export interface NewUser {
  auth0Id: string
  name: string
  email: string
}


