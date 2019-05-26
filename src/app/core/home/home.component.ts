import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Stock } from "app/models/stock.model";
import { StockService } from "app/services/stock.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [StockService]
})
export class HomeComponent implements OnInit {
  stocks: Array<Stock>;
  displayedColumns: string[] = ["symbol", "price"];
  dataSource: MatTableDataSource<Stock>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {}

  constructor(private stockService: StockService, private router: Router) {
    this.stockService.getAllStocks().subscribe(result => {
      this.stocks = result as Array<Stock>;
      this.dataSource = new MatTableDataSource<Stock>(this.stocks);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToDetails(row:any) {
    this.router.navigate(["/stock/detail", row.symbol]);
  }
}
