import { Injectable } from "@angular/core";
import { forkJoin, Observable, Subscription } from "rxjs";
import { Games } from "src/app/core/models/game";
import { Jackpot } from "src/app/core/models/jackpot";
import { ApiService } from "./api.service";
import { CATEGORIES } from "src/app/core/conf/constants"


@Injectable({
  providedIn: "root"
})

export class CategoryService {
  idJackpots: string[] = []
  games: Games[] = [];
  jackpot: Jackpot[] = [];
  public amount: number | undefined;
  dataFilled: boolean = false;
  apiDataSubs$: Subscription = new Subscription();

  constructor(private apiService: ApiService) { }

  getData(): void {
    this.apiDataSubs$.add(
      forkJoin([
        this.apiService.getGames(),
        this.apiService.getJackpot()]
      ).subscribe(
        ([games, jackpot]) => {
          this.games = games;
          this.jackpot = jackpot;
          sessionStorage.setItem("game", JSON.stringify(this.games));
          this.idJackpots = this.getJackpotIds(this.jackpot);

          // create and storage filtered categories from games, according to constants
          CATEGORIES.forEach(category => {
            this.groupfilteredData(this.games, category);
          });
          this.dataFilled = true;

        })
    )
    this.updateJackPot();
  }

  getJackpotIds(jackpotGames: Jackpot[]) {
    let ids: string[] = []
    jackpotGames.map((jackpotGame: Jackpot) => ids.push(jackpotGame.game))
    return ids;
  }


  groupfilteredData(data: Games[], tag: string) {
    let category: string[];
    let filterCategory = data.filter(game => {
      category = game.categories;
      // if the category is 'other' or 'jackpot' the
      // way of filtering is another than the 'includes' function
      return tag === "other" || tag === "jackpot" ?
        this.specialCategories(game, tag) :
        game.categories.includes(tag);
    });

    // storage filtered category
    sessionStorage.setItem(tag, JSON.stringify(filterCategory))
  }


  specialCategories(game: Games, tag: string) {
    switch (tag) {
      case "other":
        let included: boolean = false;
        CATEGORIES.forEach(category => {
          included = included || game.categories.includes(category)
        })
        return !included;

      case "jackpot":
        return this.idJackpots.includes(game.id);

      default:
        return false;
    }

  }



  updateJackPot(): void {
    setInterval(() => {
      this.apiService.getJackpot().subscribe((jackpot: Jackpot[]) => {
        this.jackpot = jackpot;
        sessionStorage.setItem("jackpotCat", JSON.stringify(this.jackpot));
        this.amount = this.getJackPotAmount();
      });
    }, 3000);
  }

  getCachedCategory(tag: string) {
    let cachedData: string | null = sessionStorage.getItem(tag);
    let objectData: Games[] | null = !!cachedData ? JSON.parse(cachedData) : null;
    return objectData;
  }

  getJackpot(game: Games) {
    let jackpot:string | null = !!sessionStorage.getItem("jackpotCat")? sessionStorage.getItem("jackpotCat"):null;
    let jackpotObj: Jackpot[] | null = !!jackpot? JSON.parse(jackpot): null;

    console.log("jackpot", jackpotObj);
    console.log("game", game);
    let gameJackpot: Jackpot | undefined = jackpotObj?.find((item: Jackpot) => item.game === game.id);
    return gameJackpot?.amount;

    // let isJackpot: boolean = jackpot.find
    return false;

  }

  getJackPotAmount() {
    const jackpot = this.jackpot.reduce((a, b) => a + (b.amount), 0)
    return jackpot;
  }

  get dataIsFilled() {
    return this.dataFilled;
  }


}
