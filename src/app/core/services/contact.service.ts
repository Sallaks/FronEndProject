import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

const url = 'https://localhost:7042/api/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}


  async getContactDetails(id: number): Promise<Contact> {
    const res = await fetch(url + id);
    return res.json();
  }

  async getContacts(userId: number): Promise<Contact[]> {
    const data = await fetch(url + '/GetContacts/' + userId);
    return data.json();
  }
}
