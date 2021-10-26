import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { PrimeNgModule } from "src/app/core/modules/primeNg.module";
import { HighlightDirective } from "src/app/core/directives/hoverGame.directive";


@NgModule({
  declarations: [HomeComponent, HighlightDirective],
  imports: [CommonModule, HomeRoutingModule, PrimeNgModule],
  exports: [HomeComponent],
})
export class HomeModule { }
