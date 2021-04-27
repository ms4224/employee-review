import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  public newFirstName: string;
  public newLastName: string;
  public loading: boolean = false;
  public msg = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {lastName: string, firstName: string}, private apiService: ApiService, private dialogRef: MatDialogRef<EmployeeEditComponent>) {
    this.newFirstName = data.firstName;
    this.newLastName = data.lastName;
  }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.loading = true;
    this.apiService.updateEmployee(this.data.lastName, this.newFirstName, this.newLastName).subscribe(
      () => {
        this.loading = false;
        this.dialogRef.close();
      },
      err => {
        this.msg = `There was an error: ${err.error.detail}`;
        this.loading = false;
      }
    )
  }

}
