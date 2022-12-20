import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor(private contactService: ContactService) { }

   completeName!: string;

  isEdit: boolean = true;

  ngOnInit(): void {
  }

  editEnable(){
    this.isEdit = !this.isEdit
  }


  save(value:string){
    this.completeName=value
    this.editEnable();
  }

  cancel(element:HTMLInputElement){
    element.value=this.completeName
    this.editEnable()
  }


}
