import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NO_ERRORS_SCHEMA } from "@angular/core";
import { Games } from "src/app/core/models/game";
import { Jackpot } from "src/app/core/models/jackpot";
import { ApiService } from "./api.service";
import { CategoryService } from "./category.service";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import * as MOCK_VALUES from "src/app/core/conf/mock-values";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Observable } from "rxjs";

fdescribe("CategoryService", () => {
  let apiService: ApiService
  let httpMock: HttpTestingController;
  // let http: HttpClientTestingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  })

  beforeEach(() => {
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  // afterAll(() => {
  //   httpMock.verify();
  // });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it("getGames should take array of games", () => {
    let mockGames: Games[] = MOCK_VALUES.mockGames;
    apiService.getGames().subscribe((games: Games[]) => {
      // console.log(games);
      expect(games).toEqual(mockGames);
    })
    const req = httpMock.expectOne(environment.urlGames);
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  })

  it("getJackpot should take array of jackpots", () => {
    let mockJacpots: Jackpot[] = MOCK_VALUES.mockJacpots;
    apiService.getJackpot().subscribe((jackpots: Jackpot[]) => {
      // console.log(games);
      expect(jackpots).toEqual(mockJacpots);
    })
    const req = httpMock.expectOne(environment.urlJackpot);
    expect(req.request.method).toBe('GET');
    req.flush(mockJacpots);
  })
})