import {Component, OnInit} from '@angular/core';
import {IContact} from "../../../core/interfaces/contact";
import {ContactService} from "../../../core/services/contact.service";
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: IContact = {
    id: 0,
    name: "",
    telephoneNumber: "",
    cellPhoneNumber: "",
    description: "",
  }
  id: number | undefined


  constructor(private contactService: ContactService, private route: ActivatedRoute) {
  }

 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.getContactDetails(this.id!);
    })
  }

  getContactDetails(id: number) {
    this.contactService.getContactDetails(id).then(r => this.contact = r);
  }

  getinitials(): string {
    return this.contact.name
    .slice(0, 1)
    .concat(
        this.contact.name.slice(
            this.contact.name.length - 1,
            this.contact.name.length
        )
    );
  }
}
