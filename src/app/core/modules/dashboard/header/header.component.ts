import { Component, OnDestroy, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { CategoryService } from "src/app/core/services/category.service";
import { CATEGORIES } from "src/app/core/conf/constants"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public items: MenuItem[] = []; // items que conformaran el nav de entidades
  amount: number | undefined = 0;
  constructor(
    public categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.items = this.getMenu();
    this.amount = this.categoryService.getJackPotAmount();
  }


  getMenu() {
    let menuItems: MenuItem []= [];
    let item: MenuItem;
    CATEGORIES.forEach(category => {
      item =  this.getCategory(category);
      if (item) menuItems.push(item);
    });
    return menuItems;
  }

  getCategory(cat: string): MenuItem {
    const catItem: MenuItem = {
      label: cat,
      routerLink: "/home/"+cat
    }
    return catItem;
  }

  



ngOnDestroy() {
  
}


}
