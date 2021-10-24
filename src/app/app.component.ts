import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { CategoryService } from "./core/services/category.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "jackPot";

  constructor(
    private primeConfig: PrimeNGConfig,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getData();
    this.primeConfig.ripple = true;


  }
}
