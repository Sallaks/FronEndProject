import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BACKEND_URL } from '../constants/backend';
import { IUser } from '../interfaces/user';

const url = BACKEND_URL + '/api/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private router: Router) {}

  async save(user: IUser) {
    const res= await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then()  ;
    console.log(res)
  }
}
