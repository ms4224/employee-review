import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  public newTitle: string;
  public loading: boolean = false;
  public msg = '';
  public feedbacks: IFeedback[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {reviewer?: string, reviewee?: string}, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getFeedback(this.data.reviewee, this.data.reviewer).subscribe( 
      feedbacks => {
        this.feedbacks = feedbacks;
        this.loading = false;
      },
      err => {
        this.msg = err.error.detail;
        this.loading = false;
      }
    )
  }

}
