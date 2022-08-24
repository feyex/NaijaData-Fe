import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleTweetComponent } from './bible-tweet.component';

describe('BibleTweetComponent', () => {
  let component: BibleTweetComponent;
  let fixture: ComponentFixture<BibleTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
