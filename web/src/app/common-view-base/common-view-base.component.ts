import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-common-view-base',
  templateUrl: './common-view-base.component.html',
  styleUrls: ['./common-view-base.component.scss']
})
export class CommonViewBaseComponent implements OnInit {
  public lastName = '';
  public loggedIn = false;
  public msg = '';
  public loading = false;
  public userEmployee: IEmployee;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  logIn() {//not an actual login, just checking if the last name is in the employee list
    this.loading = true;
    this.apiService.getEmployees().subscribe(
      employees => {
        const filteredEmployeeList = employees.filter((employee) => employee.lastname === this.lastName);
        if (filteredEmployeeList.length > 0) {
          this.loggedIn = true;
          this.userEmployee = filteredEmployeeList[0];
          this.msg = `You are logged in as ${this.userEmployee.lastname}, ${this.userEmployee.firstname}`;
        } else {
          this.msg = 'Your last name does not appear in the system. Please try again (names are case sensitive!)';
        }
        this.loading = false;
      },
      err => {
        this.msg = `Error: ${err.error.detail}`;
        this.loading = false;
      }
    )
  }

}
