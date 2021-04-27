import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAssignComponent } from './review-assign.component';

describe('ReviewAssignComponent', () => {
  let component: ReviewAssignComponent;
  let fixture: ComponentFixture<ReviewAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
