import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-review-assign',
  templateUrl: './review-assign.component.html',
  styleUrls: ['./review-assign.component.scss']
})
export class ReviewAssignComponent implements OnInit {
  public employees = [];
  public reviewee: string;
  public reviewer: string;
  public loading: boolean = false;
  public msg = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string}, private apiService: ApiService, private dialogRef: MatDialogRef<ReviewAssignComponent>) {
  }

  ngOnInit(): void {
    this.apiService.getEmployees().subscribe(employees => this.employees = employees);
    this.employees = [
      {lastname: 'hello', firstname: 'sup'},
      {lastname: 'hello2', firstname: 'sup'},
    ]
  }

  onClickAssign() {
    this.loading = true;
    this.apiService.assignNewFeedback(this.data.title, this.reviewee, this.reviewer).subscribe(
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
