import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss']
})
export class AdminBaseComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public viewEmployees = false;
  public viewReviews  = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  openEmployees() {
    this._reset();
    this.viewEmployees = true;
  }

  openReviews() {
    this._reset();
    this.viewReviews = true;
  }

  private _reset() {
    this.viewEmployees = false;
    this.viewReviews = false;
  }

}
