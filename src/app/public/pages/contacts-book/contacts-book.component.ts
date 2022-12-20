import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact';
import { IContactsbook } from 'src/app/core/interfaces/contacts-book';
import { ContactService } from 'src/app/core/services/contact.service';
import {ContatcsBookService} from "../../../core/services/contatcs-book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contacts-book',
  templateUrl: './contacts-book.component.html',
  styleUrls: ['./contacts-book.component.scss']
})
export class ContactsBookComponent implements OnInit {

  contactsBook:IContactsbook={
    id: 0,
    name: "",
  }
  id: number | undefined

  constructor(private contactsBookService: ContatcsBookService, private router: Router, private route: ActivatedRoute) { }


  contactsBooks : IContactsbook[] = []


  ngOnInit(): void {
    this.getAllContactsBooksByUser();
  }

  async getAllContactsBooksByUser() : Promise<void> {
    this.contactsBooks = await this.contactsBookService.getAllContactsBooksByUser();
  }

  async addContactsBook(value: string) : Promise<void> {

    const code = Number(value);
    await this.contactsBookService.share(code);
    await this.getAllContactsBooksByUser();
    this.reload();

  }

  reload() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}

