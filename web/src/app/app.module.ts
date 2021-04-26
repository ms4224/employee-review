import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { CommonViewBaseComponent } from './common-view-base/common-view-base.component';
import { ApiService } from './services/api-service.service';
import { EmployeesViewComponent } from './employees-view/employees-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBaseComponent,
    CommonViewBaseComponent,
    EmployeesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
