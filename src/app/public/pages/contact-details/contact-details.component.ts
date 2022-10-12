import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contact';
import { contacts } from 'src/assets/dataFake';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }

  contacts: Contact[] = contacts;

  ngOnInit(): void {

    console.log("contactos")
    console.log(this.contacts)

    

  }

}
