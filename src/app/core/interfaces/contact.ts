import { user } from "./user"

export interface Contact {
  id: number,
  name: string,
  telephoneNumber: string,
  celularNumber: string,
  description: string,
  user: user,
  userId: number
}
/*
export const defaultContact: Contact = {
  name: "First name",
  celularNumber: "+5412345678",
  telephoneNumber: "34128272",
  id: 0,
  description: "",
}

console.log(defaultContact)
*/