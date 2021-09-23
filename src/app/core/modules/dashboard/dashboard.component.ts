import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subsRepo: Subscription = new Subscription();
  showRepoScreen: boolean=false;
  constructor(
    ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void {
  }
}
