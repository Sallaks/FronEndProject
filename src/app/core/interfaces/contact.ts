import { user } from "./user"

export interface Contact {
  id: number,
  name: string,
  telephoneNumber: string,
  cellPhoneNumber: string,
  description: string,
  user: user,
  userId: number
}