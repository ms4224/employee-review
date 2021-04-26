import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly employeeBaseUrl = 'api/employee';
  private readonly reviewBaseUrl = 'api/review';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]>  {
    return this.http.get<IEmployee[]>(this.employeeBaseUrl)
  }

  public addEmployee(firstName: string, lastName: string): Observable<void> {
    return this.http.post<void>(this.employeeBaseUrl, {firstName: firstName, lastName: lastName})
  }

  public deleteEmployee(lastName: string): Observable<void> {
    return this.http.delete<void>(`${this.employeeBaseUrl}/${lastName}`);
  }

  public updateEmployee(lastName: string, newFirstName: string, newLastName: string): Observable<void> {
    return this.http.put<void>(`${this.employeeBaseUrl}/${lastName}`, {newFirstName: newFirstName, newLastName: newLastName});
  }

  public getReviews(): Observable<IReview[]>  {
    return this.http.get<IReview[]>(this.reviewBaseUrl)
  }

  public addReview(title: string): Observable<void> {
    return this.http.post<void>(this.reviewBaseUrl, {title: title})
  }

  public updateReview(title: string, newTitle: string): Observable<void> {
    return this.http.put<void>(`${this.reviewBaseUrl}/${title}`, {newTitle: newTitle});
  }

  public assignNewFeedback(title: string, reviewee: string, reviewer: string): Observable<void> {
    return this.http.post<void>(`${this.reviewBaseUrl}/${title}`, {reviewee: reviewee, reviewer: reviewer});
  }

  public updateFeedback(title: string, reviewee: string, reviewer: string, feedback: string): Observable<void> {
    return this.http.put<void>(`${this.reviewBaseUrl}/${title}/${reviewee}/${reviewer}`, {feedback: feedback});
  }
}
