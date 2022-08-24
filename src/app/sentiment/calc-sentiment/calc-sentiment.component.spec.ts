import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSentimentComponent } from './calc-sentiment.component';

describe('CalcSentimentComponent', () => {
  let component: CalcSentimentComponent;
  let fixture: ComponentFixture<CalcSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
