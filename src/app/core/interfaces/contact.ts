export interface Contact {
  name: string,
  telephoneNumber: string,
  celularNumber: string,
  id: number,
  description: string,
}

export const defaultContact: Contact = {
  name: "First name",
  celularNumber: "+5412345678",
  telephoneNumber: "34128272",
  id: 0,
  description: "",
}

console.log(defaultContact)

export interface ContactJasonPlaceholder {

}