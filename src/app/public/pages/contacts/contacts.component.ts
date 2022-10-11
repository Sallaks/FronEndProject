import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contact';
import { contacts } from 'src/assets/dataFake';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  contacts: Contact[] = contacts;
  


  ngOnInit(): void {

    console.log("contactos")
    console.log(this.contacts)
  }



}
