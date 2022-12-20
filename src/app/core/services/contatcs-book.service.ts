import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {IContactsbook} from "../interfaces/contacts-book";
import {BACKEND_URL} from "../constants/backend";

@Injectable({
  providedIn: 'root'
})

export class ContatcsBookService {

  constructor(private authService: AuthService) {
  }

  url = BACKEND_URL + '/api/ContactsBook';

  async getAllContactsBooksByUser(): Promise<IContactsbook[]> {
    const data = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    });
    return data.json();
  }

  async share(code: number) : Promise<void> {
    await fetch(`${this.url}/share?code=${code}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.authService.getSession().token!}`
      }
    }).then(() => this.getAllContactsBooksByUser());
  }

}
