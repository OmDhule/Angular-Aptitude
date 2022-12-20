import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4C1Component } from './q4-c1.component';

describe('Q4C1Component', () => {
  let component: Q4C1Component;
  let fixture: ComponentFixture<Q4C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q4C1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
