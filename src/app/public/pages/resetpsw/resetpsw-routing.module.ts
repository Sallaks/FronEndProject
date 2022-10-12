import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpswComponent } from './resetpsw.component';

const routes: Routes = [{ path: '', component: ResetpswComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetpswRoutingModule { }
