import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact';
import { IContactsbook } from 'src/app/core/interfaces/contacts-book';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  @Input() completeName!: string;

  @Input() contactsbook!: IContactsbook;

  contactComplete: IContactsbook | undefined;

  ngOnInit(): void {
  }

  getinitials(): string {
    return this.contactsbook.name
    .slice(0, 1)
    .concat(
        this.contactsbook.name.slice(
            this.contactsbook.name.length - 1,
            this.contactsbook.name.length
        )
    );
  }

}
