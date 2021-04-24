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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEmployees().subscribe(res => console.log('got a result', res));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
