import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Ilogin} from "../../../core/interfaces/login";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }


  login: Ilogin = {
    username: '',
    password: '',
  }


  ngOnInit(): void {
  }

  async loginUser(form:NgForm){
    //Valor del formulario para no usar NgModel
    console.log(form.value);
    const token = await this.authService.login(form.value);
    if(token) this.router.navigate(['/contacts']);
  }

}
