import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  error : boolean = false

  user: IUser = {
    email :'',
    firstName :'',
    lastName :'',
    password :'',
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user)
  }

}
