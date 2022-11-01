import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  @Input() completeName!: string;

  @Input() contact!: Contact;

  contactComplete: Contact | undefined;

  ngOnInit(): void {
    this.getContact;
  }

  async getContact() {
    this.contactComplete = await this.contactService.getContactDetails(1);
  }

  getinitials(): string {
    const initials = this.contact.name
      .slice(0, 1)
      .concat(
        this.contact.name.slice(
          this.contact.name.length - 1,
          this.contact.name.length
        )
      );
    return initials;
  }
}
