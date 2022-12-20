import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4C2Component } from './q4-c2.component';

describe('Q4C2Component', () => {
  let component: Q4C2Component;
  let fixture: ComponentFixture<Q4C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q4C2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
