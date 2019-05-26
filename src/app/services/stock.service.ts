import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recommendation } from "app/models/recommendation.enum";
import { SocialMedia } from "app/models/social-media.enum";
import { Stock } from "app/models/stock.model";
import * as moment from "moment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StockService {
  socialMediaHoldNumber = 30;

  constructor(private http: HttpClient) {}

  public getAllStocks(): Observable<any> {
    return this.http.get("./assets/stock-symbols.json");
  }

  public search(
    stock: Stock,
    startDate: moment.Moment,
    endDate: moment.Moment
  ): any {
    let diff = endDate.diff(startDate, "days");

    let dates = [];
    for (let i = 0; i <= diff; i++) {
      let newDate = moment(startDate)
        .add(i, "days")
        .toDate();
      dates.push(newDate);
    }

    let stocks = this.stockPriceGenerator(dates);
    this.socialMediaCountGenerator(stocks);

    let recommendation = this.recommendationAlgorithm(stocks);

    return { stocks: stocks, recommendation: recommendation };
  }

  stockPriceGenerator(dates: Date[]): Array<Stock> {
    let stocks = [] as Array<Stock>;
    dates.map(d => {
      let stock = new Stock();
      stock.date = d;
      stock.price = this.getRandomFloat(60, 30);
      stocks.push(stock);
    });

    return stocks;
  }

  socialMediaCountGenerator(stocks: Array<Stock>): void {
    const socialsArr = [
      SocialMedia.Twitter,
      SocialMedia.Facebook,
      SocialMedia.Linkedin
    ];

    stocks.map(stock => {
      let socialsMap = new Map<SocialMedia, number>();
      socialsArr.map(soc => {
        let randomSocialCount = this.getRandomInt(40, 20);
        socialsMap.set(soc, randomSocialCount);
        stock.socialMedia = socialsMap;
      });
    });
  }

  recommendationAlgorithm(stocks: Array<Stock>): Recommendation {
    let socialMediaValues = stocks.map(s => {
      return this.sumArray(Array.from(s.socialMedia.values()));
    });

    const sum = this.sumArray(socialMediaValues);
    const length = stocks.length;
    const holdNum = length * this.socialMediaHoldNumber * 3;

    if (stocks[0].price > stocks[length - 1].price) {
      return Recommendation.Sell;
    } else {
      if (sum < holdNum - 15) {
        return Recommendation.Sell;
      } else if (sum > holdNum + 15) {
        return Recommendation.Buy;
      } else {
        return Recommendation.Hold;
      }
    }
  }

  sumArray(medias: Array<number>): number {
    return medias.reduce((partialSum, a) => partialSum + a, 0);
  }

  getRandomInt(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomFloat(max: number, min: number): number {
    return +(Math.random() * (max - min) + min).toFixed(2);
  }
}
