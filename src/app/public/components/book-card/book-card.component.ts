import {Component, Input, OnInit} from '@angular/core';
import {IContactsbook} from "../../../core/interfaces/contacts-book";
import {ContatcsBookService} from "../../../core/services/contatcs-book.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor(private contactsBookService: ContatcsBookService) { }

  @Input() contactsBook! : IContactsbook;

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

  async share() : Promise<void> {
    window.prompt(`Envia este codigo a un amigo para que vea tu agenda: codigo: `,`${this.contactsBook.code}` );
    await this.contactsBookService.share(this.contactsBook.code!);
  }


}
