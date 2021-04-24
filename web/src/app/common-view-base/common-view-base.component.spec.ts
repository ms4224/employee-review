import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonViewBaseComponent } from './common-view-base.component';

describe('CommonViewBaseComponent', () => {
  let component: CommonViewBaseComponent;
  let fixture: ComponentFixture<CommonViewBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonViewBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
