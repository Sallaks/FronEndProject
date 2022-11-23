import { IUser } from "./user"

export interface Contact {
  id: number,
  name: string,
  telephoneNumber: string,
  cellPhoneNumber: string,
  description: string,
  user: IUser,
  userId: number
}