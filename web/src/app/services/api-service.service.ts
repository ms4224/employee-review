import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly employeeBaseUrl = 'api/employee';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any>  {
    return this.http.get(this.employeeBaseUrl).pipe(
      map(res => res)
    )
  }
}
