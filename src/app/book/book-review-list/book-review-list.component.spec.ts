import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewListComponent } from './book-review-list.component';

describe('BookReviewsComponent', () => {
  let component: BookReviewListComponent;
  let fixture: ComponentFixture<BookReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
