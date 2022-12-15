import { IUser } from "./user"

export interface IContact {
  id: number,
  name: string,
  telephoneNumber: string,
  cellPhoneNumber: string,
  description: string,
  userId?: number,
  user?: IUser
}
