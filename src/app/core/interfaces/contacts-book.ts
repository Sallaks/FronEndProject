import { IContact } from "./contact";
import { IUser } from "./user";


export interface IContactsbook{
id: number,
name: string,
code: number,
owners?: IUser[]
contacts: IContact[]
}