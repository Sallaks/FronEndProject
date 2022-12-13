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

  async getContacts(): Promise<IContact[]> {
    console.log(this.authService.getSession().token!)
    const data = await fetch(url + '/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    });
    return data.json();
  }
}
