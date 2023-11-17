export interface Event {
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
}

export interface SavedEvent {
  id: number
  name: string
  location: string
  date: string
  description: string
  added_by_user: string
  photo: string
}
