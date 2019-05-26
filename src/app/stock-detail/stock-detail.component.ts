import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { Recommendation } from "app/models/recommendation.enum";
import { Stock } from "app/models/stock.model";
import { StockService } from "app/services/stock.service";
import * as moment from "moment";

@Component({
  selector: "dd-stock-detail",
  templateUrl: "./stock-detail.component.html",
  styleUrls: ["./stock-detail.component.scss"],
  providers: [StockService]
})
export class StockDetailComponent implements OnInit {
  stock: Stock;
  startDate: Date;
  endDate: Date;
  recommendation: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stockService: StockService
  ) {
    this.stockService.getAllStocks().subscribe(result => {
      const stocks = result as Array<Stock>;
      const symbol = this.route.snapshot.params["symbol"];
      this.stock = stocks.find(s => s.symbol === symbol);
    });
  }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  dateChange(type: string, event: MatDatepickerInputEvent<Date>): void {
    if (type === "start") {
      this.startDate = event.value;
    } else {
      this.endDate = event.value;
    }
  }

  search(): void {
    if (this.startDate && this.endDate) {
      const startDate = moment(this.startDate);
      const endDate = moment(this.endDate);

      if (startDate.isBefore(endDate)) {
        let result = this.stockService.search(this.stock, startDate, endDate);
        this.recommendation = Recommendation[result["recommendation"]];
      }
    }
  }
}
