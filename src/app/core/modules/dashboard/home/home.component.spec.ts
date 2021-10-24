import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import * as MOCK_VALUES from "src/app/core/conf/mock-values"
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should be new', () => {
    let newEval: boolean = false;
    let data: any = {
      categories : ["new", "slots"]
    };
     component.category = "other";
     newEval = component.isNew(data.categories);
    expect(newEval).toBe(true);
  });

  fit('should be top', () => {
    let topEval: boolean = false;
    let data: any = {
      categories : ["top", "slots"]
    };
     component.category = "other";
     topEval = component.isTop(data.categories);
    expect(topEval).toBe(true);
  });

});
