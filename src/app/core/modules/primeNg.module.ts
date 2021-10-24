import { NgModule } from "@angular/core";
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar"
import { ToolbarModule } from "primeng/toolbar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { ChipsModule } from "primeng/chips";
import { DragDropModule } from "primeng/dragdrop";
import { CardModule } from "primeng/card";


@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    ChipsModule,
    DragDropModule,
    CardModule
  ],
})
export class PrimeNgModule { }
