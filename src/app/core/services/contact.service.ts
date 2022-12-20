import {Injectable} from '@angular/core';
import {IContact} from '../interfaces/contact';
import {BACKEND_URL} from "../constants/backend";
import {AuthService} from "./auth.service";

const url = BACKEND_URL + '/api/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private authService: AuthService) {
  }


  async getContactDetails(id: number): Promise<IContact> {
    const res = await fetch(`${url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      },
    });
    return res.json();
  }

  async getContacts(contactsBookId : number): Promise<IContact[]> {
    console.log(this.authService.getSession().token!)
    const data = await fetch(`${url}/ContactsBook/${contactsBookId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    });
    return data.json();
  }

  async save(contact: IContact) {
    console.log(contact)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      },
      body: JSON.stringify(contact),
    });
    console.log(res)
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    });

    return res.ok;
  }

  async updateContact(contact: IContact): Promise<boolean> {
    const res = await fetch (`${url}/${contact.id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    });

    return res.ok;

  }

}
