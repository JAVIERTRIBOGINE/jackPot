import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Games} from 'src/app/core/models/game';
import {Jackpot} from 'src/app/core/models/jackpot';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  
  games: Observable<Games[]> = new Observable<Games[]>();
  jackpot: Observable<Jackpot[]> = new Observable<Jackpot[]>();

  constructor(private apiService: ApiService) { }

  async getData(): Promise<void> {
    this.games = await this.apiService.getGames();
    this.jackpot = await this.apiService.getJasckpot();
    this.cachingData();
  }

  cachingData() {
    this.games.toPromise().then((_games:Games[]) => {
      this.filterData(_games,'new', 'newCategory');
      this.filterData(_games, 'top', 'topCategory');
      this.filterData(_games, 'slots', 'slotsCategory');
 
      sessionStorage.setItem('games', JSON.stringify(_games))
    });
    this.jackpot.toPromise().then(data => {
      sessionStorage.setItem('jackpot', JSON.stringify(data))
    });
  }


  filterData(data: Games[], tag: string, storage:string) {
    let category: string[];
    let filterCategory = data.filter( game => {
      category = game.categories;
      return game.categories.includes(tag);
      
    });
    sessionStorage.setItem(storage, JSON.stringify(filterCategory))
  }

  getCacehdCategory(tag:string){
    let cachedData: string | null = sessionStorage.getItem(tag);
    let objectData: object | null = !!cachedData? JSON.parse(cachedData): null;
    return objectData;
  }

  
}
