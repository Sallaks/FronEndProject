import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IContact } from 'src/app/core/interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  contact: IContact = {
    id: 0,
    name: "",
    telephoneNumber: "",
    cellPhoneNumber: "",
    description: "",
  }
  id: number | undefined

  isEdit: boolean = false;

  editCont(editForm : NgForm): void {
    console.log("funca")
  }

}
