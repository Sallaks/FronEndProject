import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  contacts: IContact[] = [];

  contactBookId: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.contactBookId = params['id'];
      this.getContacts(this.contactBookId);
    })
  }

  async getContacts(contactBookId: number) {
    this.contacts = await this.contactService.getContacts(contactBookId);
  }

}
