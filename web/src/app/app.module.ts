import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminBaseComponent } from './admin-base/admin-base.component';
import { CommonViewBaseComponent } from './common-view-base/common-view-base.component';
import { ApiService } from './services/api-service.service';
import { EmployeesViewComponent } from './employees-view/employees-view.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewAssignComponent } from './review-assign/review-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBaseComponent,
    CommonViewBaseComponent,
    EmployeesViewComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    ReviewsViewComponent,
    ReviewEditComponent,
    ReviewAddComponent,
    ReviewAssignComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
