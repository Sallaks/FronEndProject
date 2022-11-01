import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './public/pages/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./public/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./public/pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./public/pages/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
    children: [{ path: 'contact-details', component: ContactDetailsComponent }],
  },
  {
    path: 'resetpsw',
    loadChildren: () =>
      import('./public/pages/resetpsw/resetpsw.module').then(
        (m) => m.ResetpswModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
