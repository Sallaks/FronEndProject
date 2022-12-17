import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsBookComponent } from './contacts-book.component';

const routes: Routes = [{ path: '',component: ContactsBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsBookRoutingModule { }
