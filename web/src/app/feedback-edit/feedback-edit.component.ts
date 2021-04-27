import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.scss']
})
export class FeedbackEditComponent implements OnInit {
  @Input() lastName: string;
  feedbacks: IFeedback[] = [];
  loading = false;
  msg = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this._reloadFeedbacks();
  }

  submitFeedback(feedback: IFeedback) {
    this.apiService.updateFeedback(feedback.title, feedback.reviewee, feedback.reviewer, feedback.feedback).subscribe(
      () => {
        this.loading = false;
        this.msg = `Sent feedback for ${feedback.title}, for employee: ${feedback.reviewee}`;
      },
      err => {
        this.msg = err.error.msg;
        this.loading = false;
      }
    )
  }

  private _reloadFeedbacks() {
    this.loading = true;
    this.apiService.getEmptyFeedbacksForReviewer(this.lastName).subscribe(
      feedbacks => {
        this.loading = false;
        this.feedbacks = feedbacks;
        if (this.feedbacks.length === 0) {
          this.msg = 'No feedbacks found for this employee'
        }
      },
      err => {
        this.msg = `Error: ${err.error.msg}`;
        this.loading = false;
      }
    )
  }

}
