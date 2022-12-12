import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import { ContactDetailsComponent } from './contact-details.component';
import {DialogComponentComponent} from "../../components/dialog-component/dialog-component.component";


@NgModule({
  declarations: [
    ContactDetailsComponent,
    DialogComponentComponent,
  ],
  imports: [
    CommonModule,
    ContactDetailsRoutingModule
  ]
})
export class ContactDetailsModule { }
