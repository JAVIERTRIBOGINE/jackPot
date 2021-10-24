import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Games } from "src/app/core/models/game";
import { CategoryService } from "src/app/core/services/category.service";
import { getUrlParams } from "src/app/core/services/utils.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  category: string = "";
  objectCategory: Games[] | null = [];
  subscription$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.objectCategory = [];
    this.router.events.subscribe(() => {
      let urlParams: any = getUrlParams(this.router);
      this.category = urlParams["entity"];
      this.objectCategory = this.categoryService.getCachedCategory(this.category);
    })
  }

  ngOnInit(): void {
  }

  isNew(data: string[]) {

    return this.category !== "new" && data?.includes("new");
  }

  isTop(data: string[]) {
    return this.category !== "top" && data?.includes("top")
  }

  notNewnotTop(data: string[]) {
    return !this.isNew(data)
  }

  

  get thereIsData(){
    return this.categoryService.dataIsFilled;
  }

  ngOnDestroy() {
  }

}
