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

export interface NewJoin {
  event_id: number
  user: string
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
