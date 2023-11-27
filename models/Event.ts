export interface NewEvent {
  name: string
  location: string
  date: number
  description: string
  added_by_user: string
  photo: string
}

export interface Event extends NewEvent {
  id: number
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

export interface DisplayEvent extends PublicDisplayEvent {
  email: string
  auth0Id: string
}

export interface NewJoinEvent {
  event_id: number
  is_creator: boolean
}

export interface NewUser {
  auth0Id: string
  name: string
  email: string
}

//type for add event
export type AddEventParams = {
  newEvent: NewEvent
  token: string
}

//type for edit event
export type EditEventParams = {
  updatedEvent: Event
  token: string
}

//type for delete event
export type DeleteEventParams = {
  numId: number
  token: string
}

// type for join
export type JoinEventParams = {
  newJoin: NewJoinEvent
  token: string
}
