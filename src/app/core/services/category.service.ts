import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games } from 'src/app/core/models/game';
import { Jackpot } from 'src/app/core/models/jackpot';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  games: Observable<Games[]> = new Observable<Games[]>();
  jackpot: Observable<Jackpot[]> = new Observable<Jackpot[]>();
  public amount: number | undefined;
  constructor(private apiService: ApiService) { }

  async getData(): Promise<void> {
    this.games = await this.apiService.getGames();
    this.getJackPot();
  }

  async getJackPot(): Promise<void> {
    setInterval(async () => {
      this.jackpot = await this.apiService.getJasckpot();
      console.log("jackpot cada 3 segundos: ", this.jackpot);
      this.cachingData();
      this.getJackPotAmount();

    }, 3000);

  }

  cachingData() {
    this.games.toPromise().then((_games: Games[]) => {
      this.filterData(_games, 'new');
      this.filterData(_games, 'top');
      this.filterData(_games, 'slots');
      this.filterData(_games, 'other');

      sessionStorage.setItem('game', JSON.stringify(_games))
    });
    this.jackpot.toPromise().then(data => {
      sessionStorage.setItem('jackpot', JSON.stringify(data));
      this.amount = this.getJackPotAmount();
    });
  }


  filterData(data: Games[], tag: string) {
    let category: string[];
    let filterCategory = data.filter(game => {
      category = game.categories;
      return tag==='other'? 
      !game.categories.includes('new') &&
      !game.categories.includes('slots') &&
      !game.categories.includes('top')
       : game.categories.includes(tag);
    });
    sessionStorage.setItem(tag, JSON.stringify(filterCategory))
  }

  getCacehdCategory(tag: string) {
    let cachedData: string | null = sessionStorage.getItem(tag);
    let objectData: Games[] | null = !!cachedData ? JSON.parse(cachedData) : null;
    return objectData;
  }

  getJackPotAmount() {
    // const dataJackpot = this.getCacehdCategory('jackpot');
    let strJackpot: string | null = !! sessionStorage.getItem('jackpot')? sessionStorage.getItem('jackpot'): null;
    let dataJackpot : Jackpot[] | null = !!strJackpot? JSON.parse(strJackpot) : null;
    const jackpot = dataJackpot?.reduce((a,b) => a+parseInt( b.amount) , 0)
    console.log("jackpot amount : ", jackpot);
    return jackpot;
    
  }


}
