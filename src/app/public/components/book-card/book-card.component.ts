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

   completeName!: string;

  @Input() contactsbook!: IContactsbook;

  contactComplete: IContactsbook | undefined;

  ngOnInit(): void {
  }

  isEdit: boolean = false;

  editEnable(){
    this.isEdit = !this.isEdit
  }


  save(value:string){
    this.completeName=value
    this.editEnable();

  }

  cancel(element:HTMLInputElement){
    element.value=this.completeName
  
  }


}
