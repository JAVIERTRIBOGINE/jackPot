import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderRoutingModule } from "./header-routing.module";
import { MenubarModule } from "primeng/menubar"
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [ HeaderComponent],
  imports: [CommonModule, HeaderRoutingModule, MenubarModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
