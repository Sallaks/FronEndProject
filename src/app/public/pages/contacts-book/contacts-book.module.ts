import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsBookRoutingModule } from './contacts-book-routing.module';
import { ContactsBookComponent } from './contacts-book.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';


@NgModule({
  declarations: [
    ContactsBookComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    ContactsBookRoutingModule
  ]
})
export class ContactsBookModule { }
