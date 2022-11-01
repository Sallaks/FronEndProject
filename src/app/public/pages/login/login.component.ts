import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/core/interfaces/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  login: login = {
    email: '',
    password: '',
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.login)
  }


}
