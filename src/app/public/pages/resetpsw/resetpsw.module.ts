import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpswRoutingModule } from './resetpsw-routing.module';
import { ResetpswComponent } from './resetpsw.component';


@NgModule({
  declarations: [
    ResetpswComponent
  ],
  imports: [
    CommonModule,
    ResetpswRoutingModule
  ]
})
export class ResetpswModule { }
