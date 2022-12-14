import { IUser } from "./user"

export interface Contact {
  id?: number,
  name: string,
  telephoneNumber: string,
  cellPhoneNumber: string,
  description: string,
  userId?: number,
  user?: IUser
}
