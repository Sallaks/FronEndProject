import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

const url = 'https://localhost:7042/api/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }


  async getContactDetails(id: number): Promise<Contact> {
    const res = await fetch(url + id);
    return await res.json();
  }

  async getContacts(userId: number): Promise<Contact[]> {
    const data = await fetch(url + '/GetContacts/' + userId);
    return await data.json();
  }
  /*

  async editContact(contact: Contact) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(url + '/api/Contact', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async addContact(contact: Contact) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(url + '/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await fetch(url + '/api/Contact' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authentication': this.auth.getSession().token!
      },
    });
    return res.ok;
  }
  */
}
