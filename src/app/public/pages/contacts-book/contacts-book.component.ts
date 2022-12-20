import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact';
import { IContactsbook } from 'src/app/core/interfaces/contacts-book';
import { ContactService } from 'src/app/core/services/contact.service';

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

  constructor(private contactService: ContactService) { }
  

 contactsbooks: IContactsbook[]= [];


  ngOnInit(): void {
  }

  isEdit: boolean = false;

  editEnable(){
    this.isEdit = !this.isEdit
  }



}

