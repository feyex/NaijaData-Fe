import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSentimentComponent } from './view-sentiment.component';

describe('ViewSentimentComponent', () => {
  let component: ViewSentimentComponent;
  let fixture: ComponentFixture<ViewSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
