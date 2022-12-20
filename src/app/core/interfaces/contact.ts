import {IContactsbook} from "./contacts-book";

export interface IContact {
  id: number,
  name: string,
  telephoneNumber: string,
  cellPhoneNumber: string,
  description: string,
  contactsBookId: number,
  contactsBook?: IContactsbook
}
