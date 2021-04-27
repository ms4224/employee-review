import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public loading: boolean = false;
  public msg = '';

  constructor(private apiService: ApiService, private dialogRef: MatDialogRef<EmployeeAddComponent>) { }

  ngOnInit(): void {
  }

  onClickAdd() {
    this.loading = true;
    this.apiService.addEmployee(this.firstName, this.lastName).subscribe(
      () => {
        this.loading = false;
        this.dialogRef.close();
      },
      (err: HttpErrorResponse) => {
        this.msg = `There was an error: ${err.error.detail}`;
        console.log(err, typeof(err));
        this.loading = false;
      }
    )
  }

}
