import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  },
  {
    path: 'contact-create',
    loadChildren: () =>
      import('./public/pages/contact-create/contact-create.module').then(
        (m) => m.ContactCreateModule
      ),
  },
  {
    path: 'contacts/:id',
    loadChildren: () =>
      import('./public/pages/contact-details/contact-details.module').then(
        (m) => m.ContactDetailsModule
      )
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
