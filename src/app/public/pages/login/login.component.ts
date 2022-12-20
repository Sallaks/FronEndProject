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

  error : boolean = false


  login: Ilogin = {
    username: '',
    password: '',
  }


  ngOnInit(): void {
  }

  async loginUser(form:NgForm){
    const res = await this.authService.login(form.value);
    if(res) await this.router.navigate(['/contacts-book']);
    else this.error = true
  }

}
