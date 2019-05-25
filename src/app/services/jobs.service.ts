import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }
  
  public getAllJobs(): Observable<any> {
    return this.http.get("./assets/jobs.json");
  }
}
