import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewAddComponent } from '../review-add/review-add.component';
import { ReviewEditComponent } from '../review-edit/review-edit.component';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-reviews-view',
  templateUrl: './reviews-view.component.html',
  styleUrls: ['./reviews-view.component.scss']
})
export class ReviewsViewComponent implements OnInit {
  public reviews: IReview[] = [];
  public loading = false;
  public msg = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this._reload();
  }

  openAddReview() {
    const dialogRef = this.dialog.open(ReviewAddComponent, {
      width: '500px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this._reload();
    })
  }

  openEditReview(title: string) {
    const dialogRef = this.dialog.open(ReviewEditComponent, {
      width: '500px',
      height: '600px',
      data: {
        title: title
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this._reload();
    })
  }

  private _reload() {
    this.loading = true;
    this.apiService.getReviews().subscribe(
      reviews => {
        this.reviews = reviews;
        this.loading = false;
      },
      err => {
        this.msg = `Error: ${err.error.details}`;
        this.loading = false;
      }
    )
  }

}
