import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { CommonViewBaseComponent } from './common-view-base/common-view-base.component';

const routes: Routes = [
  { path: 'admin', component: AdminBaseComponent },
  { path: 'common', component: CommonViewBaseComponent },
  { path: '', redirectTo: 'common', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }