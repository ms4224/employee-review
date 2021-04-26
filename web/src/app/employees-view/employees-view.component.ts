import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent implements OnInit {

  public employees: IEmployee[] = [];
  public errorMsg: string;
  public loading = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this._reload();
  }

  deleteEmployee(lastName: string) {
    this.loading = true;
    this.apiService.deleteEmployee(lastName).subscribe(
      () => {
        this._reload();
      },
      err => this.errorMsg = err
    )
  }

  private _reload() {
    this.loading = true;
    this.apiService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.loading = false;
      },
      err => {
        this.errorMsg = err,
        this.loading = false
      }
    )
  }

}
