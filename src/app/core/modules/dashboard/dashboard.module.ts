import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeModule } from "./home/home.module";
import { DashboardComponent } from "./dashboard.component";
import { HeaderModule } from "src/app/core/modules/dashboard/header/header.module";
import { FooterModule } from "src/app/core/modules/dashboard/footer/footer.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { PrimeNgModule } from "src/app/core/modules/primeNg.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, HttpClientModule, HomeModule, FooterModule,
    HeaderModule, PrimeNgModule,
  ],
  exports: [PrimeNgModule]
})
export class DashboardModule { }
