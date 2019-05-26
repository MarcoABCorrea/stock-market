import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app-root/app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { CoreModule } from "./core/core.module";
import { StockDetailComponent } from "./stock-detail/stock-detail.component";

@NgModule({
  declarations: [AppComponent, StockDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
