import {Injectable} from '@angular/core';
import {Ilogin} from "../interfaces/login";
import {ISession} from "../interfaces/session";
import {BACKEND_URL} from "../constants/backend";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }


  private loggedIn: boolean = false;

  async login(authentication: Ilogin): Promise<boolean> {

    const token = await fetch(BACKEND_URL + '/api/authentication/authenticate', {
      method: "POST",
      body: JSON.stringify(authentication),
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      if (!res.ok) return
      return res.text()
    });

    if (!token) return false;

    this.setSession(token);

    return true;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      return JSON.parse(item);
    }
    return {expiresIn: '', token: ''};
  }

  setSession(token: any, expiresTimeHours: number = 24) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };

    localStorage.setItem('session', JSON.stringify(session));
  }

  resetSession() {
    localStorage.removeItem('session');
    this.loggedIn = false;
    this.router.navigate(["/"]);
  }
}
