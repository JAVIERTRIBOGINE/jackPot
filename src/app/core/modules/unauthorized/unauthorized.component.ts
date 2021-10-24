import { Component, OnDestroy, OnInit } from "@angular/core";
import { forkJoin, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-unauthorized",
  templateUrl: "./unauthorized.component.html",
  styleUrls: ["./unauthorized.component.scss"],
})
export class UnauthorizedComponent implements OnInit, OnDestroy {

  subscription$: Subscription = new Subscription();
  subsLan: Subscription = new Subscription();
  subsTrans: Subscription = new Subscription;
  constructor(
  ) {
  }

  ngOnInit(): void {
  }
  /**
   * Cambios de traducciones ante posibles cambios de lenguage
   */
  
  ngOnDestroy(){
  }

}
