export interface Event {
  id: number
  name: string
  location: string
  date: string
  description: string
  added_by_user: string
  photo: string
}

export interface NewEvent {
  name: string
  location: string
  date: string
  description: string
  added_by_user: string
  photo: string
}

export interface ListEvent {
  id: number
  name: string
  date: string
  location: string
  photo: string
}
