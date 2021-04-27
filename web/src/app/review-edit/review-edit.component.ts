import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss']
})
export class ReviewEditComponent implements OnInit {
  public newTitle: string;
  public loading: boolean = false;
  public msg = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string}, private apiService: ApiService, private dialogRef: MatDialogRef<ReviewEditComponent>) {
    this.newTitle = data.title;
  }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.loading = true;
    this.apiService.updateReview(this.data.title, this.newTitle).subscribe(
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
