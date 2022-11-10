import {Injectable} from '@angular/core';
import {Contact} from '../interfaces/contact';
import {BACKEND_URL} from "../constants/backend";
import {AuthService} from "./auth.service";

const url = BACKEND_URL + '/api/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private authService: AuthService) {
  }


  async getContactDetails(id: number): Promise<Contact> {
    const res = await fetch(`${url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authentication': this.authService.getSession().token!
      },
    });
    return res.json();
  }

  async getContacts(): Promise<Contact[]> {
    console.log(this.authService.getSession().token!)
    const data = await fetch(url + '/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authentication': this.authService.getSession().token!
      }
    });
    return data.json();
  }
}
