import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StockService {
  constructor(private http: HttpClient) {}

  public getAllJobs(): Observable<any> {
    return this.http.get("./assets/jobs.json");
  }

  public getAllStocks(): Observable<any> {
    return this.http.get("./assets/stock-symbols.json");
  }
}
