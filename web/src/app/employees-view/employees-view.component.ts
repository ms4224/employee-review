import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { ApiService } from '../services/api-service.service';
import { ViewFeedbackComponent } from '../view-feedback/view-feedback.component';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent implements OnInit {

  public employees: IEmployee[] = [];
  public errorMsg: string;
  public loading = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this._reload();
  }

  deleteEmployee(lastName: string) {
    this.loading = true;
    this.apiService.deleteEmployee(lastName).subscribe(
      () => {
        this._reload();
      },
      err => this.errorMsg = err.error.detail
    )
  }

  openAddEmployee() {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '500px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this._reload();
    })
  }

  openEditEmployee(lastName: string, firstName: string) {
    const dialogRef = this.dialog.open(EmployeeEditComponent, {
      width: '500px',
      height: '600px',
      data: {
        lastName: lastName,
        firstName: firstName
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this._reload();
    })
  }

  showFeedbackForEmployee(lastName: string) {
    const dialogRef = this.dialog.open(ViewFeedbackComponent, {
      width: '900px',
      height: '600px',
      data: {
        reviewee: lastName
      }
    });
  }

  private _reload() {
    this.loading = true;
    this.apiService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.loading = false;
      },
      err => {
        this.errorMsg = `Error: ${err.error.detail}`,
        this.loading = false
      }
    )
  }

}
