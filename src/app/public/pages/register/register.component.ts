import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces/user';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router ) { }

  error : boolean = false

  user: IUser = {
   firstName: "",
   lastName: "",
   userName: "",
   email: "",
   password: ""
  }


  ngOnInit(): void {
  }

  register(registerForm: NgForm): void {
    if (registerForm.errors !== null) return
    const res = this.registerService.save(registerForm.value)
    console.log(res)
    this.router.navigate(['/login']);
    

  }

  onSubmit(): void {
    console.log(this.user)
  }

}
