import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactsModule } from '../contacts/contacts.module';




@NgModule({
  imports: [
    CommonModule,
    ContactDetailsRoutingModule,
  ]
})
export class ContactDetailsModule { }
