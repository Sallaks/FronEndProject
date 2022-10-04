import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contact';
import { UserService } from 'src/app/core/services/user.service';
import { contacts } from 'src/assets/dataFake';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private us:UserService,
  ) { }

  contacts: Contact[] = contacts;
  
  isLoggedIn:boolean = true;


  ngOnInit(): void {

    console.log("contactos")
    console.log(this.contacts)
  }



}
