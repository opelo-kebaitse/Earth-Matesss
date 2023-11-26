export interface NewEvent {
  name: string
  location: string
  date: number 
  description: string
  added_by_user: string
  photo: string
}

export interface Event extends NewEvent{
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

export interface DisplayEvent extends PublicDisplayEvent{
  email: string
  auth0Id: string
}


export interface NewJoinEvent {
  event_id: number
  user: string
}

export interface NewUser {
  auth0Id: string
  name: string
  email: string
}


//type for add event
export interface AddEventParams {
  newEvent: NewEvent
  token: string
}


//type for edit event
export interface EditEventParams {
  updatedEvent: Event
  token: string
}


//type for delete event
export interface DeleteEventParams {
  numId: number
  token: string
}

// type for join
export interface JoinEventParams {
  newJoin: NewJoinEvent
  token: string
}