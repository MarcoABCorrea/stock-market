import { NgModule, Optional, SkipSelf } from "@angular/core";
import { MaterialModule } from "app/shared/material.module";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidenavComponent,
    NotFoundComponent
  ],
  imports: [AppRoutingModule, SharedModule, MaterialModule],
  exports: [NavbarComponent, SidenavComponent, MaterialModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
