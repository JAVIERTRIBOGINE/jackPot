import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { Games } from 'src/app/core/models/game';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  category: string = "";
  objectCategory: Games[] | null = [];
  subscription$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.objectCategory = [];
    let splitUrl = this.router.url.split('/');
    this.category = splitUrl[(splitUrl.length - 1)];
    this.objectCategory = !!this.categoryService.getCacehdCategory(this.category)?this.categoryService.getCacehdCategory(this.category):[];
    
  }

  ngOnDestroy() {

  }

}
