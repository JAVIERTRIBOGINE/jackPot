import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
    let menuItems: MenuItem []= []

    const newCat = this.getNewCategory();
    if (newCat) menuItems.push(newCat);

    const slots = this.getSlotsCategory();
    if (slots) menuItems.push(slots);
    
    const other = this.getOtherCategory();
    if (other) menuItems.push(other);
    
    const game = this.getGameCategory();
    if (game) menuItems.push(game);


    return menuItems.length ? menuItems : [];
  }

  getNewCategory(): MenuItem {
    const newCat: MenuItem = {
      label: 'new',
      routerLink: "/home/new"
    }
    return newCat;
  }
  getSlotsCategory(): MenuItem {
    const slots: MenuItem = {
      label: 'slots',
      routerLink: "/home/slots"
    }
    return slots;
  }
  getOtherCategory(): MenuItem {
    const other: MenuItem = {
      label: 'other',
      routerLink: "/home/other"
    }
    return other;
  }
  getGameCategory(): MenuItem {
    const game: MenuItem = {
      label: 'game',
      routerLink: "/home/game"
    }
    return game;
  }

  



ngOnDestroy() {
  
}


}
