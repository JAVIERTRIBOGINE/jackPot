import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NO_ERRORS_SCHEMA } from "@angular/core";
import { Games } from "src/app/core/models/game";
import { Jackpot } from "src/app/core/models/jackpot";
import { ApiService } from "./api.service";
import { CATEGORIES } from "src/app/core/conf/constants"
import { CategoryService } from "./category.service";
import { TestBed } from "@angular/core/testing";
import * as MOCK_VALUES from "src/app/core/conf/mock-values";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("CategoryService", () => {
  let service: CategoryService;
  let apiService: ApiService;
  let storage: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  })

  beforeEach(() => {
    storage = {};
    service = TestBed.inject(CategoryService);
    apiService = TestBed.inject(ApiService);
  });

  fit("groupFilteredData 'top' tag in not top game should be false",
    () => {
      let tag: string = "top";
      let mockGame: Games[] = MOCK_VALUES.mockGames;
      const spy2 = spyOn(sessionStorage, 'setItem').and.callFake(
        (key: string, data: string) => storage[key] = data)
      service.groupfilteredData(mockGame, tag);
      expect(sessionStorage[tag]).toEqual(JSON.stringify(mockGame));
      expect(spy2).toHaveBeenCalled();
    })
})