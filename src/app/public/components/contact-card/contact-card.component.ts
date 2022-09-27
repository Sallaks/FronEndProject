import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  @Input() completeName!: string;

  @Input() contact!: Contact;

  ngOnInit(): void {
  }

  getinitials(): string {
    const initials = (this.contact.name.slice(0, 1)).
      concat(this.contact.name.slice
        (this.contact.name.length - 1, this.contact.name.length));
    return initials;
  }

}
