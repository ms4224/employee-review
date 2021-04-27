import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {
  public title: string;
  public loading = false;
  public msg = '';

  constructor(private apiService: ApiService, private dialogRef: MatDialogRef<ReviewAddComponent>) { }

  ngOnInit(): void {
  }

  onClickAdd() {
    this.loading = true;
    this.apiService.addReview(this.title).subscribe(
      () => {
        this.loading = false;
        this.dialogRef.close();
      },
      err => {
        this.msg = `Error: ${err.error.detail}`;
        this.loading = false;
      }
    )
  }

}
