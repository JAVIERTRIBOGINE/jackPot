import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { HomeRoutingModule } from "./footer-routing.module";
import { CardModule } from "primeng/card";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, HomeRoutingModule,CardModule],
  exports: [FooterComponent],
})
export class FooterModule {}
