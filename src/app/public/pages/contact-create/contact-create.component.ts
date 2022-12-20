import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { IContact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  constructor(private contactService : ContactService, private router: Router, private route : ActivatedRoute) { }

  error : boolean = false

  contactsBookId! : number;

  contact: IContact = {
    id: 0,
    name: "",
    telephoneNumber: "",
    cellPhoneNumber: "",
    description: "",
    contactsBookId: this.contactsBookId
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.contactsBookId = params['id'];
    })
  }

  async createContact(createForm: NgForm): Promise<void>{
    if (createForm.errors !== null) return
    createForm.value.contactsBookId = this.contactsBookId;
    await this.contactService.save(createForm.value);
    await this.router.navigate(['/contacts-book', this.contactsBookId]);
  }

}
