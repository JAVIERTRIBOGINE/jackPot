import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Games } from "src/app/core/models/game";
import { Jackpot } from "src/app/core/models/jackpot";

@Injectable({
  providedIn: "root"
})

export class ApiService {
  constructor(private http: HttpClient) { }

  public getGames(): Observable<Games[]> {

    return this.http.get<Games[]>(environment.urlGames);
  }

  public getJackpot(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(environment.urlJackpot);
  }


}
