import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  constructor(private contactService : ContactService, private router: Router) { }

  error : boolean = false

  contact: IContact = {
    id: 0,
    name: "",
    telephoneNumber: "",
    cellPhoneNumber: "",
    description: ""
  }


  ngOnInit(): void {
  }

 
  async createContact(createForm: NgForm): Promise<void>{
    if (createForm.errors !== null) return
    const res = await this.contactService.save(createForm.value)
    console.log(res)
    this.router.navigate(['/contacts']);
  }

}
