import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4C3Component } from './q4-c3.component';

describe('Q4C3Component', () => {
  let component: Q4C3Component;
  let fixture: ComponentFixture<Q4C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q4C3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
