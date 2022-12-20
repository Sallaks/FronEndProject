import { IContact } from "./contact";
import { IUser } from "./user";


export interface IContactsbook{
id: number,
name: string,
code?: number,
users?: IUser[]
contacts?: IContact[]
}