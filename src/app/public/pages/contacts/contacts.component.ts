import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts: IContact[] = [];

  ngOnInit(): void {
    this.getContacts();
  }

  async getContacts() {
    this.contacts = await this.contactService.getContacts();
  }

}
